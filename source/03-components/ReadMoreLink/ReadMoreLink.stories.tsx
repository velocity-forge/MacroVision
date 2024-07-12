import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../02-layouts/Constrain/Constrain';
import ReadMoreLinkComponent from './ReadMoreLink';
import readMoreLinkArgs from './read-more-link.yml';

const meta: Meta<typeof ReadMoreLinkComponent> = {
  title: 'Components/Read More Link',
  component: ReadMoreLinkComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ReadMoreLinkComponent>;
const ReadMoreLink: Story = {
  args: readMoreLinkArgs,
};

export default meta;
export { ReadMoreLink };
