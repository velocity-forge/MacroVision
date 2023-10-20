import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import styles from './hero-inline-image.module.css';
import heroInlineImageArgs from './hero-inline-image.yml';
import HeroInlineImage from './HeroInlineImage';

const meta: Meta<typeof HeroInlineImage> = {
  title: 'Components/Hero/Hero With Inline Image',
  component: HeroInlineImage,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof HeroInlineImage>;
const Default: Story = {
  args: {
    ...heroInlineImageArgs,
    summary: parse(heroInlineImageArgs.summary),
    media: parse(heroInlineImageArgs.media),
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
