import { ComponentMeta, ComponentStory } from '@storybook/react';
import SiteName from './SiteName';

const settings: ComponentMeta<typeof SiteName> = {
  title: 'Components/Site Name',
  component: SiteName,
};

const Template: ComponentStory<typeof SiteName> = args => (
  <SiteName {...args} />
);

const _SiteName = Template.bind({});
_SiteName.args = {
  siteName: 'Site Title',
};

export default settings;
export { _SiteName };
