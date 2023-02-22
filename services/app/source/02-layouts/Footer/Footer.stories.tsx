import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import Footer from './Footer';

const settings = {
  title: 'Layouts/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => (
  <Footer {...args}>
    <SampleContent>Footer Layout Content</SampleContent>
  </Footer>
);

const _Footer = Template.bind({});
_Footer.args = {
  hasConstrain: true,
  modifierClasses: '',
  constrainClasses: '',
};

export default settings;
export { _Footer };
