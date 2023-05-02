import { Meta, StoryObj } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import MainLayout from './Main';
import mainArgs from './main.yml';

const meta: Meta<typeof MainLayout> = {
  title: 'Layouts/Main',
  component: MainLayout,
};

type Story = StoryObj<typeof MainLayout>;

const Main: Story = {
  render: args => (
    <MainLayout {...args}>
      <SampleContent>Main Layout Content</SampleContent>
    </MainLayout>
  ),
  args: mainArgs,
};

export default meta;
export { Main };
