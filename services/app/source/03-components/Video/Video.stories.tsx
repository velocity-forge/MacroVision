import { Meta, StoryObj } from '@storybook/react';
import VideoComponent from './Video';
import videoArgs from './video.yml';

const meta: Meta<typeof VideoComponent> = {
  title: 'Components/Video',
  component: VideoComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof VideoComponent>;
const Video: Story = {
  args: videoArgs,
};

export default meta;
export { Video };
