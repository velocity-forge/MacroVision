import { Meta, StoryObj } from '@storybook/react';
import styles from './back-to-top.module.css';
import backToTopArgs from './back-to-top.yml';
import BackToTopComponent from './BackToTop';

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
