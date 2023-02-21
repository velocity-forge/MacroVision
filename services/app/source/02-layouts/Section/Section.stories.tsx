import { ComponentMeta, ComponentStory } from '@storybook/react';
import Section from './Section';

const settings = {
  title: 'Layouts/Section',
  component: Section,
  argTypes: {
    titleElement: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = args => (
  <Section {...args}>
    <p>
      Donec id elit non mi porta gravida at eget metus. Integer posuere erat a
      ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a
      pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget
      quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non
      mi porta gravida at eget metus.
    </p>
  </Section>
);

const _Section = Template.bind({});
_Section.args = {
  title: 'Section title',
  hasConstrain: false,
  titleElement: 'h2',
};

export default settings;
export { _Section };
