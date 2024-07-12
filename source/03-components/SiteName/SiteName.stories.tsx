import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../02-layouts/Constrain/Constrain';
import SiteNameComponent from './SiteName';
import siteNameArgs from './site-name.yml';

const meta: Meta<typeof SiteNameComponent> = {
  title: 'Components/Site Name',
  component: SiteNameComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof SiteNameComponent>;
const SiteName: Story = {
  // Workaround to allow story to be imported elsewhere.
  // See https://github.com/storybookjs/storybook/issues/22278
  render: args => <SiteNameComponent {...args} />,
  args: siteNameArgs,
};

export default meta;
export { SiteName };
