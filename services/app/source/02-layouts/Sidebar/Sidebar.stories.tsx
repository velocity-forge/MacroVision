import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import Sidebar from './Sidebar';

const settings = {
  title: 'Layouts/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />;
const _Sidebar = Template.bind({});
_Sidebar.args = {
  header: <SampleContent>Header Content</SampleContent>,
  sidebarFirst: <SampleContent>Optional Sidebar Content</SampleContent>,
  main: <SampleContent>Main Content</SampleContent>,
  sidebarSecond: <SampleContent>Optional Sidebar Content</SampleContent>,
};

export default settings;
export { _Sidebar };
