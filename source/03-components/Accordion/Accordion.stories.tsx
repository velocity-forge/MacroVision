import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import AccordionComponent from './Accordion';
import { AccordionItemProps } from './AccordionItem';
import accordionArgs from './accordion.yml';

const meta: Meta<typeof AccordionComponent> = {
  title: 'Components/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof AccordionComponent>;

accordionArgs.accordionItems = accordionArgs.accordionItems.map(
  (
    item:
      | (Omit<AccordionItemProps, 'content'> & { content: string })
      | AccordionItemProps,
  ) => {
    if (typeof item.content === 'string') {
      item.content = parse(item.content) as string;
    }
    return item;
  },
);

const Default: Story = {
  render: args => <AccordionComponent {...args} />,
  args: {
    ...accordionArgs,
  },
};

const StepList: Story = {
  render: args => <AccordionComponent {...args} />,
  args: {
    ...accordionArgs,
    isStepList: true,
  },
};

export default meta;
export { Default, StepList };
