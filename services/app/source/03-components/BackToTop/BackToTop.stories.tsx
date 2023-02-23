import { ComponentMeta, ComponentStory } from '@storybook/react';
import styles from './back-to-top.module.css';
import BackToTop from './BackToTop';

const settings = {
  title: 'Components/Back to Top',
  component: BackToTop,
} as ComponentMeta<typeof BackToTop>;

const Template: ComponentStory<typeof BackToTop> = args => (
  <BackToTop {...args} />
);
const _BackToTop = Template.bind({});
_BackToTop.args = {
  topElement: 'top',
  text: 'Back to top',
  isDemo: true,
  modifierClasses: styles.show,
};

export default settings;
export { _BackToTop };
