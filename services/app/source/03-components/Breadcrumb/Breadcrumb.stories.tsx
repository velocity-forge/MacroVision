import { ComponentMeta, ComponentStory } from '@storybook/react';
import Breadcrumb from './Breadcrumb';

const settings = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = args => (
  <Breadcrumb {...args} />
);

const _Breadcrumb = Template.bind({});
_Breadcrumb.args = {
  title: 'Breadcrumb',
  breadcrumb: [
    {
      url: '#0',
      text: 'Home',
    },
    {
      url: '#1',
      text: 'Level 1',
    },
    {
      url: '#2',
      text: 'Level 2',
    },
    {
      text: 'Current item',
    },
  ],
};

export default settings;
export { _Breadcrumb };
