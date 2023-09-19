import { Meta, StoryObj } from '@storybook/react';
import BreadcrumbComponent from './Breadcrumb';
import breadcrumbArgs from './breadcrumb.yml';

const meta: Meta<typeof BreadcrumbComponent> = {
  title: 'Components/Breadcrumb',
  component: BreadcrumbComponent,
  tags: ['autodocs'],
  argTypes: {
    breadcrumb: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof BreadcrumbComponent>;

const Breadcrumb: Story = {
  // Workaround to allow story to be imported elsewhere.
  // See https://github.com/storybookjs/storybook/issues/22278
  render: args => <BreadcrumbComponent {...args} />,
  args: breadcrumbArgs,
};

export default meta;
export { Breadcrumb };
