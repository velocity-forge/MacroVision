import { Meta, Story } from '@storybook/react';

const settings: Meta = {
  title: 'Global/HTML Elements/Horizontal Rule',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const HorizontalRule: Story = () => {
  return (
    <>
      <hr />
    </>
  );
};

export default settings;
export { HorizontalRule };
