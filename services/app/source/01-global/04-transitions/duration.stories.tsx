import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Property } from 'csstype';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './duration.module.css';

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

const Duration = ({ duration }: { duration: DurationOptions }) => {
  return (
    <div className={styles.duration}>
      <div className={styles.helptext}>(Hover to demo duration)</div>
      <div className={styles.group}>
        {Object.entries(duration).map(([duration, transitionDuration]) => (
          <div className={styles.item} key={`duration-${duration}`}>
            <div
              className={styles.indicator}
              style={{
                transitionDuration,
              }}
            ></div>
            <div className={styles.label}>
              <div>{duration}</div>
              <div>{transitionDuration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const settings = {
  title: 'Global/Duration',
  argTypes: {
    duration: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Duration>;

const Template: ComponentStory<typeof Duration> = args => (
  <Duration {...args} />
);
const _Duration = Template.bind({});
_Duration.args = {
  duration: duration,
};

export default settings;
export { _Duration };
