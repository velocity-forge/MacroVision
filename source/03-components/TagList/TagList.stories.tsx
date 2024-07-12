import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../02-layouts/Constrain/Constrain';
import TagListComponent from './TagList';
import tagListArgs from './tag-list.yml';

const meta: Meta<typeof TagListComponent> = {
  title: 'Components/Tag List',
  component: TagListComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TagListComponent>;
const TagList: Story = {
  args: tagListArgs,
};

export default meta;
export { TagList };
