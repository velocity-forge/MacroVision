import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormItem, { Input } from './FormItem';
import FormItemLabel from './FormItemLabel';

const settings = {
  title: 'Components/Form Item/Input',
  component: Input,
  args: {
    isDisabled: false,
    descriptionDisplay: 'after',
    description: 'The description for this form field',
    labelDisplay: 'before',
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

const Color = Template.bind({});
Color.args = {
  id: 'color',
  label: 'Color',
  type: 'color',
};

const Date = Template.bind({});
Date.args = {
  id: 'date',
  label: 'Date',
  type: 'date',
  size: 12,
  min: '1900-01-01',
  max: '2050-12-31',
};

const Email = Template.bind({});
Email.args = {
  id: 'email',
  label: 'Email',
  type: 'email',
  placeholder: 'email@example.com',
  size: 60,
  maxLength: 255,
};

const File = Template.bind({});
File.args = {
  id: 'file',
  label: 'File',
  type: 'file',
  size: 22,
  accept: 'image/*',
};

const Month = Template.bind({});
Month.args = {
  id: 'month',
  label: 'Month',
  type: 'month',
  size: 12,
};

const NumberDecimal = Template.bind({});
NumberDecimal.args = {
  id: 'decimal',
  label: 'Number (decimal)',
  type: 'number',
  placeholder: 'Placeholder',
  step: 0.01,
};

const NumberFloat = Template.bind({});
NumberFloat.args = {
  id: 'float',
  label: 'Number (float)',
  type: 'number',
  placeholder: 'Placeholder',
  step: 'any',
};

const NumberInteger = Template.bind({});
NumberInteger.args = {
  id: 'integer',
  label: 'Number (integer)',
  type: 'number',
  placeholder: 'Placeholder',
  step: 1,
};

const Password = Template.bind({});
Password.args = {
  id: 'password',
  label: 'Password',
  type: 'password',
  size: 60,
  maxLength: 128,
};

const Range = Template.bind({});
Range.args = {
  id: 'range',
  label: 'Range',
  type: 'range',
  step: 1,
  min: 0,
  max: 100,
};

const Search = Template.bind({});
Search.args = {
  id: 'search',
  label: 'Search',
  type: 'search',
  placeholder: 'Placeholder',
  size: 60,
  maxLength: 128,
};

const Telephone = Template.bind({});
Telephone.args = {
  id: 'tel',
  label: 'Telephone',
  type: 'tel',
  size: 15,
};

const Text = Template.bind({});
Text.args = {
  id: 'text',
  label: 'Text',
  type: 'text',
  placeholder: 'Placeholder',
  size: 60,
  maxLength: 128,
};

const Time = Template.bind({});
Time.args = {
  id: 'time',
  label: 'Text',
  type: 'time',
  placeholder: 'hh:mm:ss',
  size: 12,
  step: 1,
};

const Url = Template.bind({});
Url.args = {
  id: 'url',
  label: 'URL',
  type: 'url',
  placeholder: 'Placeholder',
  size: 12,
};

const Week = Template.bind({});
Week.args = {
  id: 'week',
  label: 'Week',
  type: 'week',
  size: 12,
};

export default settings;
export {
  Color,
  Date,
  Email,
  File,
  Month,
  NumberDecimal,
  NumberFloat,
  NumberInteger,
  Password,
  Range,
  Search,
  Telephone,
  Text,
  Time,
  Url,
  Week,
};
