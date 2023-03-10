import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropdownMenu from './DropdownMenu';

const settings = {
  title: 'Components/Menu/Dropdown Menu',
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = args => (
  <DropdownMenu {...args} />
);

export const _DropdownMenu = Template.bind({});
_DropdownMenu.args = {
  items: [
    {
      title: 'Home',
      url: '#0',
    },
    {
      title: 'About',
      url: '#0',
      below: [
        {
          title: 'Submenu item one',
          url: '#0',
          below: [
            {
              title: 'Submenu item one',
              url: '#0',
            },
            {
              title: 'Submenu item two',
              url: '#0',
            },
          ],
        },
        {
          title: 'Submenu item two',
          url: '#0',
        },
        {
          title: 'Submenu item three',
          url: '#0',
        },
      ],
    },
    {
      title: 'Resources',
      url: '#0',
      below: [
        {
          title: 'Submenu item one',
          url: '#0',
        },
        {
          title: 'Submenu item two',
          url: '#0',
        },
      ],
    },
  ],
};

export default settings;
