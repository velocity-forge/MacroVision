import { Meta, StoryObj } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import ConstrainLayout from './Constrain';
import constrainArgs from './constrain.yml';

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
