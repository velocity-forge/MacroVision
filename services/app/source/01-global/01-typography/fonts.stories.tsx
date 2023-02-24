import { Meta, Story } from '@storybook/react';
import { Property } from 'csstype';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './fonts.module.css';

const settings: Meta = {
  title: 'Global/Typography/Fonts',
};

interface FontOptions {
  [name: string]: Property.FontFamily;
}

interface WeightOptions {
  [name: string]: Property.FontWeight;
}

const allVars = getCssVariables();

const fonts = allVars.reduce((allFonts, [key, value]) => {
  if (key.indexOf('--font-family') === 0) {
    const name =
      key.substring(14).charAt(0).toUpperCase() + key.substring(14).slice(1);
    allFonts[name] = value;
  }
  return allFonts;
}, {} as FontOptions);

const weights = allVars.reduce((allWeights, [key, value]) => {
  if (key.indexOf('--font-weight') === 0) {
    const name = key.substring(14);
    allWeights[name] = value;
  }
  return allWeights;
}, {} as WeightOptions);

const Fonts: Story = args => {
  return (
    <>
      {Object.entries(args.fonts as FontOptions).map(([name, fontFamily]) => (
        <div className={styles.fonts} key={name}>
          <h3
            className={styles.family}
            style={{
              fontFamily,
            }}
          >
            {name}
          </h3>
          {Object.entries(args.weights as WeightOptions).map(
            ([name, fontWeight]) => (
              <div className={styles.item} key={name}>
                <div
                  className={styles['preview-character']}
                  style={{
                    fontStyle: 'normal',
                    fontFamily,
                    fontWeight,
                  }}
                >
                  AaBbCc
                </div>
                <div
                  className={styles.preview}
                  style={{
                    fontStyle: 'normal',
                    fontFamily,
                    fontWeight,
                  }}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  1234567890(,.;:?!$&*)
                </div>
                <div className={styles['preview-meta']}>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.weight}>
                    <span className={styles.label}>Weight:</span>
                    {fontWeight}
                  </div>
                  <div className={styles.style}>
                    <span className={styles.label}>Style:</span>
                    {fontFamily}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      ))}
    </>
  );
};
Fonts.args = {
  fonts: fonts,
  weights: weights,
};

export default settings;
export { Fonts };
