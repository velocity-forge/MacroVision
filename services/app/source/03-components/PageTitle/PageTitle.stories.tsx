import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageTitle from './PageTitle';

const settings = {
  title: 'Components/Page Title',
  component: PageTitle,
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
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = args => (
  <PageTitle {...args} />
);
const _PageTitle = Template.bind({});
_PageTitle.args = {
  pageTitle: 'Page Title',
};

export default settings;
export { _PageTitle };
