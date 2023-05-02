import { Meta, StoryObj } from '@storybook/react';
import TagComponent from './Tag';
import tagArgs from './tag.yml';

const meta: Meta<typeof TagComponent> = {
  title: 'Components/Tag',
  component: TagComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TagComponent>;
const Tag: Story = {
  args: tagArgs,
};

export default meta;
export { Tag };
