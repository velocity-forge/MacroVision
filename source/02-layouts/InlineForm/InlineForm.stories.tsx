import { Meta, StoryObj } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import InlineFormLayout from './InlineForm';
import inlineFormArgs from './inline-form.yml';

const meta: Meta<typeof InlineFormLayout> = {
  title: 'Layouts/Inline Form',
  component: InlineFormLayout,
};

type Story = StoryObj<typeof InlineFormLayout>;

const InlineForm: Story = {
  render: args => (
    <InlineFormLayout {...args}>
      {Array.from(new Array(4).keys()).map(i => (
        <SampleContent key={i}>Form Item {i + 1}</SampleContent>
      ))}
    </InlineFormLayout>
  ),
  args: inlineFormArgs,
};

export default meta;
export { InlineForm };
