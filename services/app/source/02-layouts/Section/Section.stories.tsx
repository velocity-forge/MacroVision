import { Meta, StoryObj } from '@storybook/react';
import SectionLayout from './Section';
import sectionArgs from './section.yml';

const meta: Meta<typeof SectionLayout> = {
  title: 'Layouts/Section',
  component: SectionLayout,
  argTypes: {
    titleElement: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'],
      control: {
        type: 'select',
      },
    },
  },
};

type Story = StoryObj<typeof SectionLayout>;

const Section: Story = {
  render: args => (
    <SectionLayout {...args}>
      <p>
        Donec id elit non mi porta gravida at eget metus. Integer posuere erat a
        ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a
        pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non
        mi porta gravida at eget metus.
      </p>
    </SectionLayout>
  ),
  args: sectionArgs,
};

export default meta;
export { Section };
