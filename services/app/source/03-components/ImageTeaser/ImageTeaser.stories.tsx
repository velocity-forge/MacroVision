import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageTeaser from './ImageTeaser';

const settings = {
  title: 'Components/Image Teaser',
  component: ImageTeaser,
} as ComponentMeta<typeof ImageTeaser>;

const Template: ComponentStory<typeof ImageTeaser> = args => (
  <ImageTeaser {...args} />
);

const _ImageTeaser = Template.bind({});
_ImageTeaser.args = {
  url: '#0',
  image: <img src="http://fpoimg.com/140x105?text=Thumbnail 4:3" />,
  title: 'Title',
  date: 'Teaser Date',
  summary: (
    <p>
      This is the summary, which can contain{' '}
      <abbr title="Hyper Text Markup Language">HTML</abbr> markup. It should be
      600 characters or less.
    </p>
  ),
};

export default settings;
export { _ImageTeaser };
