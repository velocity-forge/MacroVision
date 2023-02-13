import { Meta, Story } from '@storybook/react';
import { Property } from 'csstype';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './duration.module.css';

const settings: Meta = {
  title: 'Global/Duration',
};

interface DurationOptions {
  [duration: string]: Property.TransitionDuration;
}

const allVars = getCssVariables();
const duration = allVars.reduce((allDurations, [key, value]) => {
  if (key.indexOf('--duration') === 0) {
    const duration = key.substring(11);
    allDurations[duration] = value;
  }
  return allDurations;
}, {} as DurationOptions);

const Duration: Story = args => {
  return (
    <div className={styles['duration']}>
      <div className={styles.helptext}>
        (Hover to demo duration)
      </div>
      <div className={styles.group}>
        {Object.entries(args.duration as DurationOptions).map(
          ([duration, transitionDuration]) => (
            <div className={styles.item}>
              <div
                key={`duration-${duration}`}
                className={styles.indicator}
                style={{
                  transitionDuration,
                }}
              >
              </div>
              <div className={styles.label}>
                <div>{duration}</div>
                <div>{transitionDuration}</div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
Duration.args = {
  duration: duration,
};

export default settings;
export { Duration };
