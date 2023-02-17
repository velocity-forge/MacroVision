import { Meta, Story } from '@storybook/react';

const settings: Meta = {
  title: 'Global/HTML Elements/Address',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const Address: Story = () => {
  return (
    <>
      <address>
        333 E Wonderview Ave
        <br />
        Estes Park, CO 80517
      </address>
    </>
  );
};

export default settings;
export { Address };
