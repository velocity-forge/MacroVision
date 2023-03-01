import { ComponentMeta, ComponentStory } from '@storybook/react';
import Details from './Details';

const settings = {
  title: 'Components/Details',
  component: Details,
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = args => (
  <Details {...args}>
    <p>Details content</p>
  </Details>
);

const _Details = Template.bind({});
_Details.args = {
  detailsSummary: 'Details summary',
  detailsDescription: 'Details description',
  modifierClasses: '',
  isRequired: false,
};

export default settings;
export { _Details };
