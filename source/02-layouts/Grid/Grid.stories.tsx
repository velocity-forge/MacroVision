import { Meta, StoryObj } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import GridLayout from './Grid';
import gridArgs from './grid.yml';

function GridDemo(): JSX.Element {
  const arr = Array.from(Array(6).keys());
  return (
    <>
      {arr.map((_, i) => (
        <SampleContent key={i}>Grid Item {i + 1}</SampleContent>
      ))}
    </>
  );
}

const meta: Meta<typeof GridLayout> = {
  title: 'Layouts/Grid',
  component: GridLayout,
  argTypes: {
    numCols: {
      options: [1, 2, 3, 4, 6],
      control: {
        type: 'select',
      },
    },
  },
};

type Story = StoryObj<typeof GridLayout>;

const Grid: Story = {
  render: args => (
    <GridLayout {...args}>
      <GridDemo />
    </GridLayout>
  ),
  args: gridArgs,
};

export default meta;
export { Grid };
