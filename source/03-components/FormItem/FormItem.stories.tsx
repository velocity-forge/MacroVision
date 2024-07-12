import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../02-layouts/Constrain/Constrain';
import { Input } from './FormItem';
import checkboxArgs from './checkbox.yml';
import radioArgs from './radio.yml';

const meta: Meta<typeof Input> = {
  title: 'Components/Form Item',
  component: Input,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
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
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Input>;

const Checkbox: Story = {
  args: checkboxArgs,
};

const Radio: Story = {
  args: radioArgs,
};

export default meta;
export { Checkbox, Radio };
