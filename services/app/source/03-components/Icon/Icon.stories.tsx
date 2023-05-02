import { Meta, StoryObj } from '@storybook/react';
import IconComponent from './Icon';

const meta: Meta<typeof IconComponent> = {
  title: 'Components/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const Icon: StoryObj<typeof IconComponent> = {
  render: () => {
    const icons = [
      'angle-double-left',
      'angle-double-right',
      'angle-down',
      'angle-left',
      'angle-right',
      'angle-up',
      'rss',
      'facebook',
      'linkedin',
      'twitter',
      'close',
    ];
    return (
      <>
        {icons.map(icon => (
          <p key={icon}>
            <IconComponent isHidden={false} iconName={icon} label={icon} />{' '}
            {icon}
          </p>
        ))}
      </>
    );
  },
  args: {
    iconName: 'angle-up',
    isHidden: true,
  },
};

export default meta;
export { Icon };
