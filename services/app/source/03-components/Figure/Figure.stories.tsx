import { ComponentMeta, ComponentStory } from '@storybook/react';
import { _Video as Video } from '../Video/Video.stories';
import Figure from './Figure';
import styles from './figure.module.css';

const settings = {
  title: 'Components/Figure',
  component: Figure,
} as ComponentMeta<typeof Figure>;

const Template: ComponentStory<typeof Figure> = args => <Figure {...args} />;

const Default = Template.bind({});
Default.args = {
  media: (
    <img
      src="https://picsum.photos/200/200?image=237"
      alt="dog photo"
      width={200}
      height={200}
    />
  ),
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper vel metus at cursus.',
};

const FigureCentered = Template.bind({});
FigureCentered.args = {
  ...Default.args,
  modifierClasses: 'u-align-center',
};

const FigureLeftAligned = Template.bind({});
FigureLeftAligned.args = {
  ...Default.args,
  modifierClasses: 'u-align-left',
};

const FigureRightAligned = Template.bind({});
FigureRightAligned.args = {
  ...Default.args,
  modifierClasses: 'u-align-right',
};

const FigureWithVideo = Template.bind({});
FigureWithVideo.args = {
  media: <Video {...Video.args} />,
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper vel metus at cursus.',
  modifierClasses: styles['figure--iframe'],
};

const FigureWithVideoCentered = Template.bind({});
FigureWithVideoCentered.args = {
  ...FigureWithVideo.args,
  modifierClasses: [styles['figure--iframe'], 'u-align-center'],
};

const FigureWithVideoLeftAligned = Template.bind({});
FigureWithVideoLeftAligned.args = {
  ...FigureWithVideo.args,
  modifierClasses: [styles['figure--iframe'], 'u-align-left'],
};

const FigureWithVideoRightAligned = Template.bind({});
FigureWithVideoRightAligned.args = {
  ...FigureWithVideo.args,
  modifierClasses: [styles['figure--iframe'], 'u-align-right'],
};

export default settings;
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
