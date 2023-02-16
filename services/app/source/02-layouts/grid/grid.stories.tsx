import { ComponentStory, Meta } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import styles from './grid.module.css';

function GridDemo({ numCols }: { numCols: number }): JSX.Element {
  const arr = Array.from(Array(6).keys());
  return (
    <div className={styles[numCols > 1 ? `grid--${numCols}-col` : 'grid']}>
      {arr.map((_, i) => (
        <SampleContent key={i}>Grid Item {i + 1}</SampleContent>
      ))}
    </div>
  );
}

const settings: Meta<typeof GridDemo> = {
  title: 'Layouts/Grid',
  argTypes: {
    numCols: {
      options: [1, 2, 3, 4, 6],
      control: {
        type: 'select',
      },
    },
  },
};

const Template: ComponentStory<typeof GridDemo> = args => (
  <GridDemo {...args} />
);
const Grid = Template.bind({});
Grid.args = {
  numCols: 1,
};

export default settings;
export { Grid };
