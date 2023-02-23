import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import SiteContainer from './SiteContainer';

const settings = {
  title: 'Layouts/Site Container',
  component: SiteContainer,
} as ComponentMeta<typeof SiteContainer>;

const Template: ComponentStory<typeof SiteContainer> = args => (
  <SiteContainer {...args}>
    <SampleContent>Site Container Layout Content</SampleContent>
  </SiteContainer>
);

const _SiteContainer = Template.bind({});
_SiteContainer.args = {
  modifierClasses: '',
};
export default settings;
export { _SiteContainer };
