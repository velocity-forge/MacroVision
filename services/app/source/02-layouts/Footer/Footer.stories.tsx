import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import Footer from './Footer';

const settings: ComponentMeta<typeof Footer> = {
  title: 'Layouts/Footer',
  component: Footer,
};

const _Footer: ComponentStory<typeof Footer> = args => (
  <Footer {...args}>
    <SampleContent>Footer Layout Content</SampleContent>
  </Footer>
);
_Footer.args = {
  hasConstrain: true,
};

export default settings;
export { _Footer };
