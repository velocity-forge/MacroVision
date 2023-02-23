import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import Header from './Header';

const settings = {
  title: 'Layouts/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => (
  <Header {...args}>
    <SampleContent>Header Layout Content</SampleContent>
  </Header>
);

const _Header = Template.bind({});
_Header.args = {
  hasConstrain: true,
  modifierClasses: '',
  constrainClasses: '',
};

export default settings;
export { _Header };
