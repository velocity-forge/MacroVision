import { Meta, StoryObj } from '@storybook/react';
import PageTitleComponent from './PageTitle';
import pageTitleArgs from './page-title.yml';

const meta: Meta<typeof PageTitleComponent> = {
  title: 'Components/Page Title',
  component: PageTitleComponent,
  argTypes: {
    pageTitle: {
      type: 'string',
      description: 'The page title or headline',
      table: {
        defaultValue: {
          summary: 'Page Title',
        },
      },
    },
  },
  parameters: {
    controls: {
      include: ['pageTitle', 'modifierClasses'],
    },
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof PageTitleComponent>;
const PageTitle: Story = {
  args: pageTitleArgs,
};

export default meta;
export { PageTitle };
