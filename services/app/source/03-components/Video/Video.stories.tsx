import { ComponentMeta, ComponentStory } from '@storybook/react';
import Video from './Video';

const settings = {
  title: 'Components/Video',
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = args => <Video {...args} />;

const _Video = Template.bind({});
_Video.args = {
  iframeSrc: 'https://player.vimeo.com/video/505735218',
  iframeTitle: 'Say Hello to the New Forum One',
};

export default settings;
export { _Video };
