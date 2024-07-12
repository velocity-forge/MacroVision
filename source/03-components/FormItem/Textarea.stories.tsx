import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../02-layouts/Constrain/Constrain';
import { Textarea } from './FormItem';
import textareaArgs from './textarea.yml';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form Item/Textarea',
  component: Textarea,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  args: {
    labelDisplay: 'before',
    prefix: '',
    suffix: '',
    description: 'The description for this form field.',
    descriptionDisplay: 'after',
    errors: '',
    isDisabled: false,
    isFullWidth: false,
    isRequired: false,
  },
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
};

type Story = StoryObj<typeof Textarea>;
const Default: Story = {
  args: {
    ...textareaArgs,
  },
};

export default meta;
export { Default };
