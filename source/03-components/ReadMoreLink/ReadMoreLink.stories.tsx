import { Meta, StoryObj } from '@storybook/react';
import readMoreLinkArgs from './read-more-link.yml';
import ReadMoreLinkComponent from './ReadMoreLink';

const meta: Meta<typeof ReadMoreLinkComponent> = {
  title: 'Components/Read More Link',
  component: ReadMoreLinkComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ReadMoreLinkComponent>;
const ReadMoreLink: Story = {
  args: readMoreLinkArgs,
};

export default meta;
export { ReadMoreLink };
