import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import CallToActionComponent from './CallToAction';
import callToActionArgs from './call-to-action.yml';

const meta: Meta<typeof CallToActionComponent> = {
  title: 'Components/Call To Action',
  component: CallToActionComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof CallToActionComponent>;
const CallToAction: Story = {
  args: {
    ...callToActionArgs,
    media: parse(callToActionArgs.media),
    body: parse(callToActionArgs.body),
  },
};

export default meta;
export { CallToAction };
