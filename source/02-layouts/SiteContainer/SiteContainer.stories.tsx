import { Meta, StoryObj } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import SiteContainerLayout from './SiteContainer';
import siteContainerArgs from './site-container.yml';

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
