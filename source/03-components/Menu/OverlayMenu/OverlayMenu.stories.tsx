import { Meta, StoryObj } from '@storybook/react';
import OverlayMenuComponent from './OverlayMenu';
import overlayMenuArgs from './overlay-menu.yml';

const meta: Meta<typeof OverlayMenuComponent> = {
  title: 'Components/Menu/Overlay Menu',
  component: OverlayMenuComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof OverlayMenuComponent>;
const OverlayMenu: Story = {
  args: overlayMenuArgs,
};

export default meta;
export { OverlayMenu };
