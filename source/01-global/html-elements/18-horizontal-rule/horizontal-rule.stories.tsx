import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Global/HTML Elements/Horizontal Rule',
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
