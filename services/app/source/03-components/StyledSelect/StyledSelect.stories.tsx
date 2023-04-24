import { ComponentMeta, ComponentStory } from '@storybook/react';
import StyledSelect from './StyledSelect';

const settings: ComponentMeta<typeof StyledSelect> = {
  title: 'Components/Styled Select',
  component: StyledSelect,
};

const Template: ComponentStory<typeof StyledSelect> = args => (
  <StyledSelect {...args} />
);

const _StyledSelect = Template.bind({});
_StyledSelect.args = {
  options: [
    {
      value: 'one',
      label: 'Option One',
    },
    {
      value: 'two',
      label: 'Option Two',
    },
    {
      value: 'three',
      label: 'Option Three',
    },
    {
      value: 'four',
      label: 'Option Four',
    },
    {
      value: 'five',
      label: 'Option Five',
    },
    {
      value: 'six',
      label: 'Disabled Option',
      isDisabled: true,
    },
  ],
  isMulti: true,
  isSearchable: true,
};

const WithGroups = Template.bind({});
WithGroups.args = {
  options: [
    {
      label: 'Group One',
      options: [
        {
          value: 'one',
          label: 'Option One',
        },
        {
          value: 'two',
          label: 'Option Two',
        },
        {
          value: 'three',
          label: 'Option Three',
        },
      ],
    },
    {
      label: 'Group Two',
      options: [
        {
          value: 'four',
          label: 'Option Four',
        },
        {
          value: 'five',
          label: 'Option Five',
        },
        {
          value: 'six',
          label: 'Disabled Option',
          isDisabled: true,
        },
      ],
    },
  ],
  isMulti: false,
  isSearchable: false,
};

export default settings;
export { _StyledSelect, WithGroups };
