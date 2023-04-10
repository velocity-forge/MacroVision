import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResponsiveMenu from './ResponsiveMenu';

const settings: ComponentMeta<typeof ResponsiveMenu> = {
  title: 'Components/Menu/Responsive Menu',
  component: ResponsiveMenu,
};

const Template: ComponentStory<typeof ResponsiveMenu> = args => (
  <ResponsiveMenu {...args} />
);

const _ResponsiveMenu = Template.bind({});
_ResponsiveMenu.args = {
  items: [
    {
      title: 'Home',
      url: '#0',
      inActiveTrail: false,
    },
    {
      title: 'About',
      url: '#0',
      inActiveTrail: false,
    },
    {
      title: 'Resources',
      url: '#0',
      inActiveTrail: false,
    },
    {
      title: 'Contact',
      url: '#0',
      inActiveTrail: false,
    },
  ],
};

export default settings;
export { _ResponsiveMenu };
