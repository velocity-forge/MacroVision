import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import PageTemplate from './Page';
import SampleContent from '../../06-utility/storybook/SampleContent';

const meta: Meta<typeof PageTemplate> = {
  title: 'Templates/Page',
  component: PageTemplate,
};

const Page: StoryObj<typeof PageTemplate> = {
  render: args => (
    <PageTemplate {...args}>
      <SampleContent>Main page content</SampleContent>
    </PageTemplate>
  ),
  args: {
    preContent: <SampleContent>Pre-content area</SampleContent>,
    title: 'Page Title',
  },
};

export default meta;
export { Page };
