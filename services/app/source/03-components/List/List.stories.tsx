import { ComponentStory, Meta } from '@storybook/react';
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

const settings: Meta<typeof DemoList> = {
  title: 'Components/List',
  argTypes: {
    style: {
      options: ['border', 'clean', 'inline', 'pipeline', 'column'],
    },
  },
};

const Template: ComponentStory<typeof DemoList> = args => (
  <DemoList {...args} />
);

const Clean = Template.bind({});
Clean.args = {
  style: 'clean',
};

const Inline = Template.bind({});
Inline.args = {
  style: 'inline',
};

const Pipeline = Template.bind({});
Pipeline.args = {
  style: 'pipeline',
};

const Border = Template.bind({});
Border.args = {
  style: 'border',
};

const Column = Template.bind({});
Column.args = {
  style: 'column',
};

export default settings;
export { Clean, Inline, Pipeline, Border, Column };
