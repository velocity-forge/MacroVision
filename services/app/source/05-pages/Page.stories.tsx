import { Meta, StoryObj } from '@storybook/react';
import { PageProps } from '../04-templates/Page/Page';
import { Page as PageStory } from '../04-templates/Page/Page.stories';
import PageWrapper from './page-wrappers/default';

interface PageStoryArgs {
  page: PageProps;
}

const settings: Meta<PageStoryArgs> = {
  title: 'Pages/Page',
};

const Page: StoryObj<PageStoryArgs> = {
  render: args => (
    <PageWrapper>
      {PageStory.render && <PageStory.render {...args.page} />}
    </PageWrapper>
  ),
};
Page.args = {
  page: {
    ...PageStory.args,
    title: 'Page title',
  },
};

export default settings;
export { Page };
