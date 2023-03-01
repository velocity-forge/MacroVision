import { ComponentMeta, ComponentStory } from '@storybook/react';
import Fieldset from './Fieldset';
import styles from './fieldset.module.css';

const settings = {
  title: 'Components/Fieldset',
  component: Fieldset,
} as ComponentMeta<typeof Fieldset>;

const Template: ComponentStory<typeof Fieldset> = args => (
  <Fieldset {...args}>
    <p>Fieldset content goes here&hellip;</p>
  </Fieldset>
);

const _Fieldset = Template.bind({});
_Fieldset.args = {
  legend: 'Fieldset',
  description: <p>The description for this fieldset.</p>,
  modifierClasses: styles['fieldset--default'],
  id: 'fieldset',
  errors: '',
  prefix: '',
  suffix: '',
  isRequired: false,
  isDisabled: false,
};

export default settings;
export { _Fieldset };
