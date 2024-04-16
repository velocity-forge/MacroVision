import { Meta, StoryObj } from '@storybook/react';
import { Property } from 'csstype';
import { useEffect, useState } from 'react';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './letterspacing.module.css';

const meta: Meta = {
  title: 'Global/Typography/Letterspacing',
};

interface FontOptions {
  [name: string]: Property.FontFamily;
}

interface LetterspacingOptions {
  [name: string]: Property.LetterSpacing;
}

const Letterspacing: StoryObj = {
  render: function Render() {
    const [fonts, setFonts] = useState<FontOptions | undefined>(undefined);
    const [letterSpacings, setLetterSpacings] = useState<
      LetterspacingOptions | undefined
    >(undefined);

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

      const letterSpacings = allVars.reduce(
        (allLetterSpacings, [key, value]) => {
          if (key.indexOf('--letterspacing') === 0) {
            const name = key.substring(16);
            allLetterSpacings[name] = value;
          }
          return allLetterSpacings;
        },
        {} as LetterspacingOptions,
      );
      setLetterSpacings(letterSpacings);
    }, []);

    return (
      <>
        {fonts &&
          Object.entries(fonts)
            .sort((fontA, fontB) => {
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
              <div className={styles['line-height']} key={name}>
                <h2 className={styles.heading}>{name}</h2>
                <div style={{ fontFamily }}>
                  {letterSpacings &&
                    Object.entries(letterSpacings).map(
                      ([name, letterSpacing]) => (
                        <div className={styles.row} key={name}>
                          <div className={styles.label}>{name}</div>
                          <div
                            className={styles.preview}
                            style={{ letterSpacing: letterSpacing }}
                          >
                            The letterspacing for this text is{' '}
                            <strong>{letterSpacing}</strong>.
                          </div>
                        </div>
                      ),
                    )}
                </div>
              </div>
            ))}
      </>
    );
  },
};

export default meta;
export { Letterspacing };
