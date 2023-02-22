import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleContent from '../../06-utility/storybook/SampleContent';
import InlineForm from './InlineForm';

const settings = {
  title: 'Layouts/Inline Form',
  component: InlineForm,
} as ComponentMeta<typeof InlineForm>;

const Template: ComponentStory<typeof InlineForm> = args => (
  <InlineForm {...args}>
    {Array.from(new Array(4).keys()).map(i => (
      <SampleContent key={i}>Form Item {i + 1}</SampleContent>
    ))}
  </InlineForm>
);

const _InlineForm = Template.bind({});
_InlineForm.args = {
  wrap: true,
  modifierClasses: '',
};

export default settings;
export { _InlineForm };
