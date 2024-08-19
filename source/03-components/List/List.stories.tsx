import { Meta, StoryObj } from '@storybook/react';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import listStyles from './list.module.css';

function DemoList({ style }: { style: string }): JSX.Element {
  return (
    <ul className={listStyles[style]}>
      {Array.from(Array(4).keys()).map((_, i) => (
        <li key={i}>List Item {i + 1}</li>
      ))}
    </ul>
  );
}

const meta: Meta<typeof DemoList> = {
  title: 'Components/List',
  component: DemoList,
  decorators: [withGlobalWrapper],
  argTypes: {
    style: {
      options: ['border', 'clean', 'inline', 'pipeline', 'column'],
    },
  },
};

type Story = StoryObj<typeof DemoList>;
const Clean: Story = {
  args: {
    style: 'clean',
  },
};
const Inline: Story = {
  args: {
    style: 'inline',
  },
};
const Pipeline: Story = {
  args: {
    style: 'pipeline',
  },
};
const Border: Story = {
  args: {
    style: 'border',
  },
};

const Column: Story = {
  args: {
    style: 'column',
  },
};

export default meta;
export { Border, Clean, Column, Inline, Pipeline };
