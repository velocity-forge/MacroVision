import { Meta, StoryObj } from '@storybook/react';
import Fieldset from '../Fieldset/Fieldset';
import fieldsetStyles from '../Fieldset/fieldset.module.css';
import { Input } from './FormItem';
import { Radio } from './FormItem.stories';

const meta: Meta = {
  title: 'Components/Form Item/Radios',
};

const Radios: StoryObj = {
  render: () => {
    return (
      <Fieldset
        legend="Radios"
        id="radios"
        description="The description for this fieldset"
        modifierClasses={fieldsetStyles['fieldset--radios']}
      >
        <Input {...Radio.args} label="Choice A" id="choice-a" />
        <Input {...Radio.args} label="Choice B" id="choice-b" />
        <Input {...Radio.args} label="Choice C" id="choice-c" />
        <Input {...Radio.args} label="Choice D" id="choice-d" />
        <Input
          {...Radio.args}
          label="Disabled Choice"
          id="choice-e"
          isDisabled={true}
        />
      </Fieldset>
    );
  },
};

export default meta;
export { Radios };
