import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import Main from './Main';

const settings = {
  title: 'Layouts/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const _Main: ComponentStory<typeof Main> = args => (
  <Main {...args}>
    <SampleContent>Main Layout Content</SampleContent>
  </Main>
);

export default settings;
export { _Main };
