import { Meta, StoryObj } from '@storybook/react';
import Icons from './icons';

const meta: Meta = {
  title: 'Components/Icon',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const Icon: StoryObj = {
  render: () => {
    const icons = Object.keys(Icons);
    return (
      <>
        {icons.map(icon => {
          const IconComponent = Icons[icon as keyof typeof Icons];
          return (
            <p key={icon}>
              <IconComponent isHidden={false} title={icon} />{' '}
              {icon}
            </p>
          );
        })}
      </>
    );
  },
  args: {
    iconName: 'AngleUp',
    isHidden: true,
  },
};

export default meta;
export { Icon };
