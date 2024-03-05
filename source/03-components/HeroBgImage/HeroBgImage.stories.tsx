import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import HeroBgImage from './HeroBgImage';
import styles from './hero-bg-image.module.css';
import heroBgImageArgs from './hero-bg-image.yml';

const meta: Meta<typeof HeroBgImage> = {
  title: 'Components/Hero/Hero With Background Image',
  component: HeroBgImage,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof HeroBgImage>;
const Default: Story = {
  args: {
    ...heroBgImageArgs,
    summary: parse(heroBgImageArgs.summary),
    heroImage: parse(heroBgImageArgs.heroImage),
  },
};
const Left: Story = {
  args: {
    ...Default.args,
    modifierClasses: styles['hero--left'],
  },
};
const Right: Story = {
  args: {
    ...Default.args,
    modifierClasses: styles['hero--right'],
  },
};

export default meta;
export { Default, Left, Right };
