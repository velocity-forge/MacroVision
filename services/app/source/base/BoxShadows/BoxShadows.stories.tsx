import { Meta, Story } from '@storybook/react';
import { Property } from 'csstype';
import getCssVariables from '../../helpers/storybook/getCssVariables';
import styles from './box-shadow.module.css';

const settings: Meta = {
  title: 'Global/Box Shadows',
};

interface BoxShadowOptions {
  [elevation: number]: Property.BoxShadow;
}

const allVars = getCssVariables();
const boxShadows = allVars.reduce((allShadows, [key, value]) => {
  if (key.indexOf('--box-shadow') === 0) {
    const elevation = parseInt(key.substring(13));
    allShadows[elevation] = value;
  }
  return allShadows;
}, {} as BoxShadowOptions);

const BoxShadows: Story = args => {
  return (
    <div className={styles['box-shadow']}>
      {Object.entries(args.boxShadow as BoxShadowOptions).map(
        ([elevation, boxShadow]) => (
          <div
            key={`box-shadow-${elevation}`}
            className={styles.item}
            style={{
              boxShadow,
            }}
          >
            <div className={styles.label}>Elevation Level: {elevation}</div>
          </div>
        ),
      )}
    </div>
  );
};
BoxShadows.args = {
  boxShadow: boxShadows,
};

export default settings;
export { BoxShadows };
