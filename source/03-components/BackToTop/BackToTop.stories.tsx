import { Meta, StoryObj } from '@storybook/react';
import BackToTopComponent from './BackToTop';
import styles from './back-to-top.module.css';
import backToTopArgs from './back-to-top.yml';

const meta: Meta<typeof BackToTopComponent> = {
  title: 'Components/Back To Top',
  component: BackToTopComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof BackToTopComponent>;

const BackToTop: Story = {
  args: {
    ...backToTopArgs,
    modifierClasses: styles.show,
  },
  storyName: 'Back To Top',
};

export default meta;
export { BackToTop };
