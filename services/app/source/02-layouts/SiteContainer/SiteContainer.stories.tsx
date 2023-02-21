import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import SiteContainer from './SiteContainer';

const settings = {
  title: 'Layouts/Site Container',
  component: SiteContainer,
} as ComponentMeta<typeof SiteContainer>;

const _SiteContainer: ComponentStory<typeof SiteContainer> = args => (
  <SiteContainer {...args}>
    <SampleContent>Site Container Layout Content</SampleContent>
  </SiteContainer>
);

export default settings;
export { _SiteContainer };
