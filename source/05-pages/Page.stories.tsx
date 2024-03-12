import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../03-components/Breadcrumb/Breadcrumb.stories';
import { WYSIWYG } from '../03-components/Wysiwyg/Wysiwyg.stories';
import PageTemplate, { PageProps } from '../04-templates/Page/Page';
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
      <PageTemplate {...args.page} />
    </PageWrapper>
  ),
  args: {
    page: {
      preContent: Breadcrumb.render ? (
        <Breadcrumb.render {...Breadcrumb.args} />
      ) : undefined,
      title: 'Page Title',
      children: WYSIWYG.render && <WYSIWYG.render {...WYSIWYG.args} />,
    },
  },
};

export default settings;
export { Page };
