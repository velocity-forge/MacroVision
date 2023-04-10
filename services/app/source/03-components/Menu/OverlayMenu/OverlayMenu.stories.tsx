import { ComponentMeta, ComponentStory } from '@storybook/react';
import OverlayMenu from './OverlayMenu';

const settings: ComponentMeta<typeof OverlayMenu> = {
  title: 'Components/Menu/Overlay Menu',
  component: OverlayMenu,
};

const Template: ComponentStory<typeof OverlayMenu> = args => (
  <OverlayMenu {...args} />
);

const _OverlayMenu = Template.bind({});
_OverlayMenu.args = {
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
export { _OverlayMenu };
