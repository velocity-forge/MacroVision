import { Meta, StoryObj } from '@storybook/react';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import { Input } from './FormItem';
import colorArgs from './color.yml';
import dateArgs from './date.yml';
import decimalArgs from './decimal.yml';
import emailArgs from './email.yml';
import fileArgs from './file.yml';
import floatArgs from './float.yml';
import integerArgs from './integer.yml';
import monthArgs from './month.yml';
import passwordArgs from './password.yml';
import rangeArgs from './range.yml';
import searchArgs from './search.yml';
import telephoneArgs from './telephone.yml';
import textArgs from './text.yml';
import timeArgs from './time.yml';
import urlArgs from './url.yml';
import weekArgs from './week.yml';

const meta: Meta<typeof Input> = {
  title: 'Components/Form Item/Input',
  component: Input,
  decorators: [withGlobalWrapper],
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
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
};

type Story = StoryObj<typeof Input>;
const Color: Story = {
  args: colorArgs,
};
const Date: Story = {
  args: dateArgs,
};
const Email: Story = {
  args: emailArgs,
};
const File: Story = {
  args: fileArgs,
};
const Month: Story = {
  args: monthArgs,
};
const NumberDecimal: Story = {
  args: decimalArgs,
};
const NumberFloat: Story = {
  args: floatArgs,
};
const NumberInteger: Story = {
  args: integerArgs,
};
const Password: Story = {
  args: passwordArgs,
};
const Range: Story = {
  args: rangeArgs,
};
const Search: Story = {
  args: searchArgs,
};
const Telephone: Story = {
  args: telephoneArgs,
};
const Text: Story = {
  args: textArgs,
};
const Time: Story = {
  args: timeArgs,
};
const Url: Story = {
  args: urlArgs,
};
const Week: Story = {
  args: weekArgs,
};

export default meta;
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
