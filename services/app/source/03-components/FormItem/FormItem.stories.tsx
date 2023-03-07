import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormItem, { Input } from './FormItem';
import FormItemLabel from './FormItemLabel';

const settings = {
  title: 'Components/Form Item',
  component: Input,
  args: {
    isDisabled: false,
    descriptionDisplay: 'after',
    description: 'The description for this form field',
    errors: '',
    isFullWidth: false,
    isRequired: false,
    prefix: '',
    suffix: '',
  },
  subcomponents: { FormItem, FormItemLabel },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

const Checkbox = Template.bind({});
Checkbox.args = {
  id: 'checkbox',
  label: 'Checkbox',
  labelDisplay: 'after',
  type: 'checkbox',
};

const Radio = Template.bind({});
Radio.args = {
  id: 'radio',
  label: 'Radio option',
  labelDisplay: 'after',
  type: 'radio',
  name: 'demo',
};

export default settings;
export { Checkbox, Radio };
