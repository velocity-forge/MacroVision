import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from './Icon';

const settings = {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = () => {
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
          <Icon isHidden={false} iconName={icon} label={icon} /> {icon}
        </p>
      ))}
    </>
  );
};
const _Icon = Template.bind({});
_Icon.args = {
  iconName: 'angle-up',
  isHidden: true,
};

export default settings;
export { _Icon };
