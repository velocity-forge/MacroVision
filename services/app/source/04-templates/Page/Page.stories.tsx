import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Breadcrumb } from '../../03-components/Breadcrumb/Breadcrumb.stories';
import { WYSIWYG } from '../../03-components/Wysiwyg/Wysiwyg.stories';
import PageTemplate from './Page';

const meta: Meta<typeof PageTemplate> = {
  title: 'Templates/Page',
  component: PageTemplate,
};

const Page: StoryObj<typeof PageTemplate> = {
  render: args => (
    <PageTemplate {...args}>
      {WYSIWYG.render && <WYSIWYG.render {...WYSIWYG.args} />}
    </PageTemplate>
  ),
  args: {
    preContent: Breadcrumb.render ? (
      <Breadcrumb.render {...Breadcrumb.args} />
    ) : undefined,
    title: 'Page Title',
  },
};

export default meta;
export { Page };
