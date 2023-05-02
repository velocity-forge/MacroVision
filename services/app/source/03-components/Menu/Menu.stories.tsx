import { Meta, StoryObj } from '@storybook/react';
import Menu from './Menu';
import footerStyles from './menu-footer.module.css';
import footerMenuArgs from './menu-footer.yml';
import menuArgs from './menu.yml';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Menu>;
const Default: Story = {
  args: menuArgs,
};
const FooterMenu: Story = {
  // Workaround to allow story to be imported elsewhere.
  // See https://github.com/storybookjs/storybook/issues/22278
  render: args => <Menu {...args} />,
  args: {
    ...footerMenuArgs,
    modifierClasses: footerStyles.menu,
    itemClasses: footerStyles.item,
  },
};

export default meta;
export { Default, FooterMenu };
