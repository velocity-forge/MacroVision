import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import Constrain from '../../02-layouts/Constrain/Constrain';
import DetailsComponent from './Details';
import detailsArgs from './details.yml';

const meta: Meta<typeof DetailsComponent> = {
  title: 'Components/Details',
  component: DetailsComponent,
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

type Story = StoryObj<typeof DetailsComponent>;
const Details: Story = {
  args: {
    ...detailsArgs,
    children: parse(detailsArgs.children),
  },
};

export default meta;
export { Details };
