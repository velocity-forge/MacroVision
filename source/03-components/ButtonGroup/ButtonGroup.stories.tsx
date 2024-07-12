import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../02-layouts/Constrain/Constrain';
import ButtonGroupComponent from './ButtonGroup';
import buttonGroupArgs from './button-group.yml';

const meta: Meta<typeof ButtonGroupComponent> = {
  title: 'Components/Button Group',
  component: ButtonGroupComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    buttons: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof ButtonGroupComponent>;
const Primary: Story = {
  args: buttonGroupArgs,
};

const Secondary: Story = {
  args: {
    ...buttonGroupArgs,
    variant: 'secondary',
  },
};

const Danger: Story = {
  args: {
    ...buttonGroupArgs,
    variant: 'danger',
  },
};

const Large: Story = {
  args: {
    ...buttonGroupArgs,
    styleSize: 'large',
  },
};

const Small: Story = {
  args: {
    ...buttonGroupArgs,
    styleSize: 'small',
  },
};

export default meta;
export { Danger, Large, Primary, Secondary, Small };
