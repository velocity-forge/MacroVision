import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../../02-layouts/Constrain/Constrain';

const meta: Meta = {
  title: 'Global/HTML Elements/Address',
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
