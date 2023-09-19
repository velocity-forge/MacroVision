import { Meta, StoryObj } from '@storybook/react';
import buttonGroupArgs from './button-group.yml';
import ButtonGroupComponent from './ButtonGroup';

const meta: Meta<typeof ButtonGroupComponent> = {
  title: 'Components/Button Group',
  component: ButtonGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    buttons: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof ButtonGroupComponent>;
const ButtonGroup: Story = {
  args: buttonGroupArgs,
};

export default meta;
export { ButtonGroup };
