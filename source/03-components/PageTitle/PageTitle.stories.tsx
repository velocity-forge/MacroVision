import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../02-layouts/Constrain/Constrain';
import PageTitleComponent from './PageTitle';
import pageTitleArgs from './page-title.yml';

const meta: Meta<typeof PageTitleComponent> = {
  title: 'Components/Page Title',
  component: PageTitleComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
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
