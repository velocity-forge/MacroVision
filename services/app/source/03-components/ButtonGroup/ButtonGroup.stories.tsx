import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonGroup from './ButtonGroup';

const settings = {
  title: 'Components/Button Group',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = args => (
  <ButtonGroup {...args} />
);

const _ButtonGroup = Template.bind({});
_ButtonGroup.args = {
  heading: 'Heading',
  element: 'div',
  modifierClasses: '',
  buttons: [
    {
      text: 'First button',
    },
    {
      text: 'Active middle button',
      isActive: true,
    },
    {
      text: 'Middle button',
    },
    {
      text: 'Last button',
    },
  ],
  activeLabel: '(active)',
};

export default settings;
export { _ButtonGroup };
