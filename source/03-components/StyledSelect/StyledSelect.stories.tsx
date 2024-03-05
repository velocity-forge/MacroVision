import { Meta, StoryObj } from '@storybook/react';
import StyledSelectComponent from './StyledSelect';
import styledSelectArgs from './styled-select.yml';
import withGroupsArgs from './with-groups.yml';

const meta: Meta<typeof StyledSelectComponent> = {
  title: 'Components/Styled Select',
  component: StyledSelectComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof StyledSelectComponent>;
const StyledSelect: Story = {
  args: styledSelectArgs,
};
const WithGroups: Story = {
  args: withGroupsArgs,
};

export default meta;
export { StyledSelect, WithGroups };
