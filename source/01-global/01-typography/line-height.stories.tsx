import { Meta, StoryObj } from '@storybook/react';
import { Property } from 'csstype';
import { useEffect, useState } from 'react';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './line-height.module.css';

const meta: Meta = {
  title: 'Global/Typography/Line Height',
};

interface FontOptions {
  [name: string]: Property.FontFamily;
}

interface LineHeightOptions {
  [name: string]: Property.LineHeight;
}

const LineHeight: StoryObj = {
  render: function Render() {
    const [fonts, setFonts] = useState<FontOptions | undefined>(undefined);
    const [lineHeights, setLineHeights] = useState<
      LineHeightOptions | undefined
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

      const lineHeights = allVars.reduce((allLineHeights, [key, value]) => {
        if (key.indexOf('--line-height') === 0) {
          const name = key.substring(14);
          allLineHeights[name] = value;
        }
        return allLineHeights;
      }, {} as LineHeightOptions);
      setLineHeights(lineHeights);
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
                  {lineHeights &&
                    Object.entries(lineHeights).map(([name, lineHeight]) => (
                      <div className={styles.row} key={name}>
                        <div className={styles.label}>{name}</div>
                        <div className={styles.preview} style={{ lineHeight }}>
                          The line-height for this text is{' '}
                          <strong>{lineHeight}</strong> times the font-size.
                          It’s worth remembering that line height is affected by
                          the x-height. Much like how different typefaces can
                          appear to be different heights despite being set at
                          the same font size, so too can line height appear to
                          be more open or tighter, depending on each individual
                          font.
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
      </>
    );
  },
};

export default meta;
export { LineHeight };
