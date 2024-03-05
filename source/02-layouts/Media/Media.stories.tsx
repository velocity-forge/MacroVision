import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import MediaLayout from './Media';
import styles from './media.module.css';
import mediaArgs from './media.yml';

const meta: Meta<typeof MediaLayout> = {
  title: 'Layouts/Media',
  component: MediaLayout,
  argTypes: {
    media: {
      control: false,
    },
    mediaContent: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof MediaLayout>;

const Default: Story = {
  args: {
    ...mediaArgs,
    media: parse(mediaArgs.media),
    mediaContent: parse(mediaArgs.mediaContent),
  },
};

const Column: Story = {
  args: {
    ...Default.args,
    modifierClasses: styles['media--column'],
  },
};

const Reversed: Story = {
  args: {
    ...Default.args,
    modifierClasses: styles['media--reversed'],
  },
};

export default meta;
export { Column, Default, Reversed };
