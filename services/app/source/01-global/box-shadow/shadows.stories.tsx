import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Property } from 'csstype';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './shadows.module.css';

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

function BoxShadowDemo({
  boxShadow,
}: {
  boxShadow: BoxShadowOptions;
}): JSX.Element {
  return (
    <div className={styles['box-shadow']}>
      {Object.entries(boxShadow).map(([elevation, boxShadow]) => (
        <div
          key={`box-shadow-${elevation}`}
          className={styles.item}
          style={{
            boxShadow,
          }}
        >
          <div className={styles.label}>Elevation Level: {elevation}</div>
        </div>
      ))}
    </div>
  );
}

const settings = {
  title: 'Global/Box Shadows',
  argTypes: {
    boxShadow: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof BoxShadowDemo>;

const Template: ComponentStory<typeof BoxShadowDemo> = args => (
  <BoxShadowDemo {...args} />
);
const BoxShadows = Template.bind({});
BoxShadows.args = {
  boxShadow: boxShadows,
};

export default settings;
export { BoxShadows };
