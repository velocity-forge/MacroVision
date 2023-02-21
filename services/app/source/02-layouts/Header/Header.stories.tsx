import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import Header from './Header';

const settings = {
  title: 'Layouts/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const _Header: ComponentStory<typeof Header> = args => (
  <Header {...args}>
    <SampleContent>Header Layout Content</SampleContent>
  </Header>
);

export default settings;
export { _Header };
