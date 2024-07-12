import { Meta, StoryObj } from '@storybook/react';
import { Property } from 'csstype';
import Constrain from '../../02-layouts/Constrain/Constrain';
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

const DurationComponent = ({ duration }: { duration: DurationOptions }) => {
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

const meta: Meta<typeof DurationComponent> = {
  title: 'Global/Duration',
  component: DurationComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  argTypes: {
    duration: {
      table: {
        disable: true,
      },
    },
  },
};

type Story = StoryObj<typeof DurationComponent>;
const Duration: Story = {
  args: {
    duration,
  },
};
export default meta;
export { Duration };
