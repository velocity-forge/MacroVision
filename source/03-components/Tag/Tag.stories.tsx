import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../02-layouts/Constrain/Constrain';
import TagComponent from './Tag';
import tagArgs from './tag.yml';

const meta: Meta<typeof TagComponent> = {
  title: 'Components/Tag',
  component: TagComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TagComponent>;
const Tag: Story = {
  args: tagArgs,
};

export default meta;
export { Tag };
