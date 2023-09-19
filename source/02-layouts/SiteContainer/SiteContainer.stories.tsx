import { Meta, StoryObj } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import siteContainerArgs from './site-container.yml';
import SiteContainerLayout from './SiteContainer';

const meta: Meta<typeof SiteContainerLayout> = {
  title: 'Layouts/Site Container',
  component: SiteContainerLayout,
};

type Story = StoryObj<typeof SiteContainerLayout>;

const SiteContainer: Story = {
  render: args => (
    <SiteContainerLayout {...args}>
      <SampleContent>Site Container Layout Content</SampleContent>
    </SiteContainerLayout>
  ),
  args: siteContainerArgs,
};
export default meta;
export { SiteContainer };
