import { ComponentMeta, ComponentStory } from '@storybook/react';
import styles from './hero-bg-image.module.css';
import HeroBgImage from './HeroBgImage';

const settings = {
  title: 'Components/Hero/Hero With Background Image',
  component: HeroBgImage,
  args: {
    hasOverlay: true,
    title: 'Hero Title',
    summary: <p>Hero summary text.</p>,
    button: {
      label: 'Hero Button',
      href: '#0',
    },
    heroImage: (
      <img src="https://picsum.photos/1600/800?image=11" alt="alt text" />
    ),
  },
} as ComponentMeta<typeof HeroBgImage>;

const Template: ComponentStory<typeof HeroBgImage> = args => (
  <HeroBgImage {...args} />
);

const Default = Template.bind({});

const Left = Template.bind({});
Left.args = {
  modifierClasses: styles['hero--left'],
};

const Right = Template.bind({});
Right.args = {
  modifierClasses: styles['hero--right'],
};

export default settings;
export { Default, Left, Right };
