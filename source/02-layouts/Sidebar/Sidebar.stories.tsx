import { Meta, StoryObj } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import SidebarLayout from './Sidebar';
import sidebarArgs from './sidebar.yml';

const meta: Meta<typeof SidebarLayout> = {
  title: 'Layouts/Sidebar',
  component: SidebarLayout,
  argTypes: {
    header: {
      control: false,
    },
    sidebarFirst: {
      control: false,
    },
    main: {
      control: false,
    },
    sidebarSecond: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof SidebarLayout>;

const Sidebar: Story = {
  args: {
    ...sidebarArgs,
    header: <SampleContent>Header Content</SampleContent>,
    sidebarFirst: <SampleContent>Optional Sidebar Content</SampleContent>,
    main: <SampleContent>Main Content</SampleContent>,
    sidebarSecond: <SampleContent>Optional Sidebar Content</SampleContent>,
  },
};

export default meta;
export { Sidebar };
