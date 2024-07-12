import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../../02-layouts/Constrain/Constrain';

const meta: Meta = {
  title: 'Global/HTML Elements/Horizontal Rule',
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const HorizontalRule: StoryObj = {
  render: () => {
    return (
      <>
        <hr />
      </>
    );
  },
  storyName: 'Horizontal Rule',
};

export default meta;
export { HorizontalRule };
