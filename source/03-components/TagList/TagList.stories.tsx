import { Meta, StoryObj } from '@storybook/react';
import TagListComponent from './TagList';
import tagListArgs from './tag-list.yml';

const meta: Meta<typeof TagListComponent> = {
  title: 'Components/Tag List',
  component: TagListComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TagListComponent>;
const TagList: Story = {
  args: tagListArgs,
};

export default meta;
export { TagList };
