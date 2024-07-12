import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import Constrain from '../../02-layouts/Constrain/Constrain';
import FieldsetComponent from './Fieldset';
import styles from './fieldset.module.css';
import fieldsetArgs from './fieldset.yml';

const meta: Meta<typeof FieldsetComponent> = {
  title: 'Components/Fieldset',
  component: FieldsetComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof FieldsetComponent>;
const Fieldset: Story = {
  args: {
    ...fieldsetArgs,
    description: parse(fieldsetArgs.description),
    children: parse(fieldsetArgs.children),
    modifierClasses: styles['fieldset--default'],
  },
};

export default meta;
export { Fieldset };
