import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import Constrain from '../../02-layouts/Constrain/Constrain';
import ImageTeaserComponent from './ImageTeaser';
import imageTeaserArgs from './image-teaser.yml';

const meta: Meta<typeof ImageTeaserComponent> = {
  title: 'Components/Image Teaser',
  component: ImageTeaserComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ImageTeaserComponent>;
const ImageTeaser: Story = {
  args: {
    ...imageTeaserArgs,
    image: parse(imageTeaserArgs.image),
    summary: parse(imageTeaserArgs.summary),
  },
};

export default meta;
export { ImageTeaser };
