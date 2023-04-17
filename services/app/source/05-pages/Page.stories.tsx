import { Meta, Story } from '@storybook/react';
import { _Page as Page } from '../04-templates/Page/Page.stories';
import PageWrapper from './page-wrappers/default';

const settings: Meta = {
  title: 'Pages/Page',
};

const _Page: Story = args => (
  <PageWrapper>
    <Page {...args.page} />
  </PageWrapper>
);
_Page.args = {
  page: Page.args,
};

export default settings;
export { _Page };
