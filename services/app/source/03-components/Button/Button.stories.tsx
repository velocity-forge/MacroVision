import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button, LinkButton, SharedButtonProps } from './Button';

function DemoButtons({ label, ...props }: SharedButtonProps): JSX.Element {
  return (
    <>
      <Button label={label} {...props} />
      <LinkButton label={`Link ${label}`} {...props} />
      <Button label={`Disabled ${label}`} {...props} disabled={true} />
    </>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // More on controls: https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: {
        type: 'radio',
      },
      defaultValue: 'primary',
    },
  },
  subcomponents: { Button, LinkButton },
} as ComponentMeta<typeof DemoButtons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DemoButtons> = args => (
  <DemoButtons {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  styleSize: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  styleSize: 'small',
  label: 'Button',
};
