import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import Constrain from '../../02-layouts/Constrain/Constrain';
import WysiwygComponent from './Wysiwyg';
import wysiwygArgs from './wysiwyg.yml';

const meta: Meta<typeof WysiwygComponent> = {
  title: 'Components/WYSIWYG',
  component: WysiwygComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof WysiwygComponent>;
const WYSIWYG: Story = {
  // Workaround to allow story to be imported elsewhere.
  // See https://github.com/storybookjs/storybook/issues/22278
  render: args => <WysiwygComponent {...args} />,
  args: {
    ...wysiwygArgs,
    children: parse(wysiwygArgs.children),
  },
};

export default meta;
export { WYSIWYG };
