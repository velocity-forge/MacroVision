import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import DetailsComponent from './Details';
import detailsArgs from './details.yml';

const meta: Meta<typeof DetailsComponent> = {
  title: 'Components/Details',
  component: DetailsComponent,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof DetailsComponent>;
const Details: Story = {
  args: {
    ...detailsArgs,
    children: parse(detailsArgs.children),
  },
};

export default meta;
export { Details };
