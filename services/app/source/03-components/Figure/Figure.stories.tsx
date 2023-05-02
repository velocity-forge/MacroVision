import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import { Video } from '../Video/Video.stories';
import FigureComponent from './Figure';
import styles from './figure.module.css';
import figureArgs from './figure.yml';

const meta: Meta<typeof FigureComponent> = {
  title: 'Components/Figure',
  component: FigureComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof FigureComponent>;

const Default: Story = {
  args: {
    ...figureArgs,
    media: parse(figureArgs.media),
  },
};

const FigureCentered: Story = {
  args: {
    ...Default.args,
    modifierClasses: 'u-align-center',
  },
};

const FigureLeftAligned: Story = {
  args: {
    ...Default.args,
    modifierClasses: 'u-align-left',
  },
};

const FigureRightAligned: Story = {
  args: {
    ...Default.args,
    modifierClasses: 'u-align-right',
  },
};

const FigureWithVideo: Story = {
  args: {
    media: Video.render && <Video.render {...Video.args} />,
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper vel metus at cursus.',
    modifierClasses: styles['figure--iframe'],
  },
};

const FigureWithVideoCentered: Story = {
  args: {
    ...FigureWithVideo.args,
    modifierClasses: [styles['figure--iframe'], 'u-align-center'],
  },
};

const FigureWithVideoLeftAligned: Story = {
  args: {
    ...FigureWithVideo.args,
    modifierClasses: [styles['figure--iframe'], 'u-align-left'],
  },
};

const FigureWithVideoRightAligned: Story = {
  args: {
    ...FigureWithVideo.args,
    modifierClasses: [styles['figure--iframe'], 'u-align-right'],
  },
};

export default meta;
export {
  Default,
  FigureCentered,
  FigureLeftAligned,
  FigureRightAligned,
  FigureWithVideo,
  FigureWithVideoCentered,
  FigureWithVideoLeftAligned,
  FigureWithVideoRightAligned,
};
