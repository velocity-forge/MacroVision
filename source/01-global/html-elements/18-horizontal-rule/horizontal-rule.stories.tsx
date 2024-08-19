import { Meta, StoryObj } from '@storybook/react';
import { withGlobalWrapper } from '../../../../.storybook/decorators';

const meta: Meta = {
  title: 'Global/HTML Elements/Horizontal Rule',
  decorators: [withGlobalWrapper],
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
