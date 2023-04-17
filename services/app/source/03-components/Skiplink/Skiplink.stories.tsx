import { ComponentMeta, ComponentStory } from '@storybook/react';
import Skiplink from './Skiplink';

const settings: ComponentMeta<typeof Skiplink> = {
  title: 'Components/Skiplink',
  component: Skiplink,
};

const Template: ComponentStory<typeof Skiplink> = args => (
  <Skiplink {...args} />
);

const _Skiplink = Template.bind({});
_Skiplink.args = {
  id: 'main',
};

export default settings;
export { _Skiplink };
