import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import AccordionComponent from './Accordion';
import accordionArgs from './accordion.yml';
import { AccordionItemProps } from './AccordionItem';

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

const Accordion: Story = {
  render: args => <AccordionComponent {...args} />,
  args: {
    ...accordionArgs,
  },
};

export default meta;
export { Accordion };
