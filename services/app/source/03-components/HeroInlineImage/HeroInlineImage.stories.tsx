import { ComponentMeta, ComponentStory } from '@storybook/react';
import styles from './hero-inline-image.module.css';
import HeroInlineImage from './HeroInlineImage';

const settings = {
  title: 'Components/Hero/Hero With Inline Image',
  component: HeroInlineImage,
  args: {
    hasOverlay: true,
    title: 'Hero Title',
    summary: <p>Hero summary text.</p>,
    button: {
      label: 'Hero Button',
      href: '#0',
    },
    media: (
      <picture>
        <source
          srcSet="https://picsum.photos/1600/800?image=11"
          media="(min-width: 1024px)"
          type="image/jpeg"
        />
        <source
          srcSet="https://picsum.photos/1200/600?image=11"
          media="(min-width: 760px)"
          type="image/jpeg"
        />
        <source
          srcSet="https://picsum.photos/800/400?image=11"
          type="image/jpeg"
        />
        <img
          srcSet="https://picsum.photos/1600/800?image=11"
          alt="Hero Image Alt Text"
        />
      </picture>
    ),
  },
} as ComponentMeta<typeof HeroInlineImage>;

const Template: ComponentStory<typeof HeroInlineImage> = args => (
  <HeroInlineImage {...args} />
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
