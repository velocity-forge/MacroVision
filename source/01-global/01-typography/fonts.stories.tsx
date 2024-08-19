import { Meta, StoryObj } from '@storybook/react';
import { Property } from 'csstype';
import { useEffect, useState } from 'react';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './fonts.module.css';

const meta: Meta = {
  title: 'Global/Typography/Fonts',
  decorators: [withGlobalWrapper],
};

interface FontOptions {
  [name: string]: Property.FontFamily;
}

interface WeightOptions {
  [name: string]: Property.FontWeight;
}

const Fonts: StoryObj = {
  render: function Render() {
    const [fonts, setFonts] = useState<FontOptions | undefined>(undefined);
    const [weights, setWeights] = useState<WeightOptions | undefined>(
      undefined,
    );

    useEffect(() => {
      const allVars = getCssVariables();

      const fonts = allVars.reduce((allFonts, [key, value]) => {
        if (key.indexOf('--font-family') === 0) {
          const name =
            key.substring(14).charAt(0).toUpperCase() +
            key.substring(14).slice(1);
          allFonts[name] = value;
        }
        return allFonts;
      }, {} as FontOptions);
      setFonts(fonts);

      const weights = allVars.reduce((allWeights, [key, value]) => {
        if (key.indexOf('--font-weight') === 0) {
          const name = key.substring(14);
          allWeights[name] = value;
        }
        return allWeights;
      }, {} as WeightOptions);
      setWeights(weights);
    }, []);

    return (
      <>
        {fonts &&
          Object.entries(fonts)
            .sort((fontA, fontB) => {
              // Sort fonts so that Primary and Secondary (if used) appear at the
              // top of the list.
              if (fontA[0].toLowerCase().includes('primary')) {
                return -1;
              }
              if (fontB[0].toLowerCase().includes('primary')) {
                return 1;
              }
              if (fontA[0].toLowerCase().includes('secondary')) {
                return -1;
              }
              if (fontB[0].toLowerCase().includes('secondary')) {
                return 1;
              }
              return 0;
            })
            .map(([name, fontFamily]) => (
              <div className={styles.fonts} key={name}>
                <h3
                  className={styles.family}
                  style={{
                    fontFamily,
                  }}
                >
                  {name}
                </h3>
                {weights &&
                  Object.entries(weights).map(([name, fontWeight]) => (
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
                  ))}
              </div>
            ))}
      </>
    );
  },
  args: {},
};

export default meta;
export { Fonts };
