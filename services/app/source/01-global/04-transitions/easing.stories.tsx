import { Meta, Story } from '@storybook/react';
import { Property } from 'csstype';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './easing.module.css';

const settings: Meta = {
  title: 'Global/Easing',
};

interface EasingOptions {
  [ease: string]: Property.TransitionTimingFunction;
}

const allVars = getCssVariables();

const easing = allVars.reduce((allEases, [key, value]) => {
  if (key.indexOf('--easing') === 0) {
    const ease = key.substring(9);
    allEases[ease] = value;
  }
  return allEases;
}, {} as EasingOptions);

const Easing: Story = args => {
  return (
    <div className={styles['easing']}>
      <div className={styles.helptext}>(Hover to demo easing)</div>
      {Object.entries(args.easing as EasingOptions).map(
        ([ease, transitionTimingFunction]) => (
          <div className={styles.group} key={`easing-${ease}`}>
            <div className={styles.item}>
              <div
                className={styles.indicator}
                style={{
                  transitionTimingFunction,
                }}
              ></div>
              <div className={styles.label}>{ease}</div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};
Easing.args = {
  easing: easing,
};

export default settings;
export { Easing };
