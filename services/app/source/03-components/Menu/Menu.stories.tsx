import { ComponentMeta, ComponentStory } from '@storybook/react';
import Menu from './Menu';
import footerStyles from './menu-footer.module.css';

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = args => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Link 1',
      url: '#0',
    },
    {
      title: 'Link 2',
      url: '#0',
    },
  ],
};

export const FooterMenu = Template.bind({});
FooterMenu.args = {
  items: [
    {
      title: 'Careers',
      url: '#0',
      inActiveTrail: false,
    },
    {
      title: 'Contact',
      url: '#0',
      inActiveTrail: false,
    },
    {
      title: 'Credits',
      url: '#0',
      inActiveTrail: false,
    },
    {
      title: 'Terms of Use',
      url: '#0',
      inActiveTrail: false,
    },
  ],
  modifierClasses: footerStyles.menu,
  itemClasses: footerStyles.item,
};
