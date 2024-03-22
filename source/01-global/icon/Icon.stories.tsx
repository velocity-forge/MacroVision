import { Meta, StoryObj } from '@storybook/react';
import Icons from './icons';

const meta: Meta = {
  title: 'Global/Icon',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    isHidden: {
      type: 'boolean',
      description: 'True if the icon should be hidden from screenreaders.',
    },
    title: {
      type: 'string',
      description:
        'Text label for icon to be read by screenreaders. Must be included if isHidden is false.',
    },
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
              <IconComponent isHidden={false} title={icon} /> {icon}
            </p>
          );
        })}
      </>
    );
  },
};

export default meta;
export { Icon };
