import { Meta, Story } from '@storybook/react';
import Fieldset from '../Fieldset/Fieldset';
import fieldsetStyles from '../Fieldset/fieldset.module.css';
import { Input } from './FormItem';
import { Checkbox } from './FormItem.stories';

export default {
  title: 'Components/Form Item/Checkboxes',
} as Meta;

export const Checkboxes: Story = () => (
  <Fieldset
    legend="Checkboxes"
    id="checkboxes"
    description="The description for this fieldset"
    modifierClasses={fieldsetStyles['fieldset--checkboxes']}
  >
    <Input {...Checkbox.args} label="Choice A" id="checkbox-1" />
    <Input {...Checkbox.args} label="Choice B" id="checkbox-2" />
    <Input {...Checkbox.args} label="Choice C" id="checkbox-3" />
    <Input {...Checkbox.args} label="Choice D" id="checkbox-4" />
    <Input
      {...Checkbox.args}
      label="Disabled Choice"
      id="checkbox-5"
      isDisabled={true}
    />
    <Input
      {...Checkbox.args}
      label="Disabled Checked Choice"
      id="checkbox-5"
      isDisabled={true}
      checked={true}
    />
  </Fieldset>
);
