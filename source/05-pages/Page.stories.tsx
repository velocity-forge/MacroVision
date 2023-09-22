import { Meta, StoryObj } from '@storybook/react';
import PageTemplate, { PageProps } from '../04-templates/Page/Page';
import PageWrapper from './page-wrappers/default';
import { Breadcrumb } from '../03-components/Breadcrumb/Breadcrumb.stories';
import React from 'react';
import { WYSIWYG } from '../03-components/Wysiwyg/Wysiwyg.stories';

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
      description: 'Demo basic page in Storybook',
      children: WYSIWYG.render && <WYSIWYG.render {...WYSIWYG.args} />,
    },
  },
};

export default settings;
export { Page };
