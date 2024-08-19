import { Meta, StoryObj } from '@storybook/react';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import VideoComponent from './Video';
import videoArgs from './video.yml';

const meta: Meta<typeof VideoComponent> = {
  title: 'Components/Video',
  component: VideoComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof VideoComponent>;
const Video: Story = {
  // Workaround to allow story to be imported elsewhere.
  // See https://github.com/storybookjs/storybook/issues/22278
  render: args => <VideoComponent {...args} />,
  args: videoArgs,
};

export default meta;
export { Video };
