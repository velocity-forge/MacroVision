import { Meta, StoryObj } from '@storybook/react';
import SkiplinkComponent from './Skiplink';
import skiplinkArgs from './skiplink.yml';

const meta: Meta<typeof SkiplinkComponent> = {
  title: 'Components/Skiplink',
  component: SkiplinkComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof SkiplinkComponent>;
const Skiplink: Story = {
  args: skiplinkArgs,
};

export default meta;
export { Skiplink };
