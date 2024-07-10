import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import Constrain from '../../02-layouts/Constrain/Constrain';
import { Button } from '../Button';
import ModalComponent from './Modal';
import modalArgs from './modal.yml';

const meta: Meta<typeof ModalComponent> = {
  title: 'Components/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ModalComponent>;

const Default: Story = {
  render: args => <ModalComponent {...args} />,
  args: {
    ...modalArgs,
    children: parse(modalArgs.children),
  },
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-5">
        <Button label="Open Modal" aria-controls="modal-1234"></Button>
        <Component />
      </Constrain>
    ),
  ],
};

export default meta;
export { Default };
