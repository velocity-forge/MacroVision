import { Meta, StoryObj } from '@storybook/react';
import ResponsiveMenuComponent from './ResponsiveMenu';
import responsiveMenuArgs from './responsive-menu.yml';

const meta: Meta<typeof ResponsiveMenuComponent> = {
  title: 'Components/Menu/Responsive Menu',
  component: ResponsiveMenuComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ResponsiveMenuComponent>;
const ResponsiveMenu: Story = {
  // Workaround to allow story to be imported elsewhere.
  // See https://github.com/storybookjs/storybook/issues/22278
  render: args => <ResponsiveMenuComponent {...args} />,
  args: responsiveMenuArgs,
};

export default meta;
export { ResponsiveMenu };
