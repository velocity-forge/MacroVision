import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormItem, { Select } from './FormItem';
import FormItemLabel from './FormItemLabel';

const settings = {
  title: 'Components/Form Item/Select',
  component: Select,
  args: {
    labelDisplay: 'before',
    descriptionDisplay: 'after',
    isDisabled: false,
    isFullWidth: false,
    isRequired: false,
    description: 'The description for this form field.',
    errors: '',
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
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

const Default = Template.bind({});
Default.args = {
  label: 'Select',
  id: 'select',
  children: (
    <>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
      <option>Option Four</option>
      <option>Option Five</option>
      <option disabled={true}>Disabled Option</option>
    </>
  ),
};

const WithGroups = Template.bind({});
WithGroups.args = {
  label: 'Select with groups',
  id: 'select-options',
  children: (
    <>
      <optgroup label="Group One">
        <option>Option A</option>
        <option>Option B</option>
        <option>Option C</option>
      </optgroup>
      <optgroup label="Group Two">
        <option>Option D</option>
        <option>Option E</option>
        <option disabled={true}>Disabled Option</option>
      </optgroup>
    </>
  ),
};

export default settings;
export { Default, WithGroups };
