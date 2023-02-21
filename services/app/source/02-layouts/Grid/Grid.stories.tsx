import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import Grid from './Grid';

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

const settings: ComponentMeta<typeof Grid> = {
  title: 'Layouts/Grid',
  component: Grid,
  argTypes: {
    numCols: {
      options: [1, 2, 3, 4, 6],
      control: {
        type: 'select',
      },
    },
  },
};

const Template: ComponentStory<typeof Grid> = args => (
  <Grid {...args}>
    <GridDemo />
  </Grid>
);
const _Grid = Template.bind({});
_Grid.args = {
  numCols: 1,
};

export default settings;
export { _Grid };
