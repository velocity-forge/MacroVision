import { Meta, StoryObj } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import constrainArgs from './constrain.yml';
import ConstrainLayout from './Constrain';

const meta: Meta<typeof ConstrainLayout> = {
  title: 'Layouts/Constrain',
  component: ConstrainLayout,
};

type Story = StoryObj<typeof ConstrainLayout>;

const Constrain: Story = {
  render: args => (
    <ConstrainLayout {...args}>
      <SampleContent>Constrain Layout Content</SampleContent>
    </ConstrainLayout>
  ),
  args: constrainArgs,
};
export default meta;
export { Constrain };
