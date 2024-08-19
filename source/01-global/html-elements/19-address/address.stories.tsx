import { Meta, StoryObj } from '@storybook/react';
import { withGlobalWrapper } from '../../../../.storybook/decorators';

const meta: Meta = {
  title: 'Global/HTML Elements/Address',
  decorators: [withGlobalWrapper],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const Address: StoryObj = {
  render: () => (
    <>
      <address>
        333 E Wonderview Ave
        <br />
        Estes Park, CO 80517
      </address>
    </>
  ),
};

export default meta;
export { Address };
