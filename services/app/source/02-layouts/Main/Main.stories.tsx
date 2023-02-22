import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import Main from './Main';

const settings = {
  title: 'Layouts/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = args => (
  <Main {...args}>
    <SampleContent>Main Layout Content</SampleContent>
  </Main>
);

const _Main = Template.bind({});
_Main.args = {
  id: 'main',
  hasConstrain: true,
  modifierClasses: '',
  constrainClasses: '',
};

export default settings;
export { _Main };
