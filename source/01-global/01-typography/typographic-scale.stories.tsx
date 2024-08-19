import { Meta, StoryObj } from '@storybook/react';
import { Property } from 'csstype';
import { useEffect, useState } from 'react';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import typographyVarsAsString from '../../00-config/vars/typography.css?raw';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './typographic-scale.module.css';

const typographyVars = typographyVarsAsString
  .replace(':root {', '')
  .replace('}', '')
  .split(';')
  .map((e: string) => {
    return e.trim();
  })
  .filter((e: string) => e.includes('--responsive-font-size'))
  .map((e: string) => {
    return e.replace(')', '').split('(').pop();
  });

const typographyVarsMax = typographyVars.map((e: string) => {
  return e.split(' ').pop();
});
const typographyVarsMin = typographyVars.map((e: string) => {
  return e.split(' ', 1).pop();
});

const settings: Meta = {
  title: 'Global/Typography/Typographic Scale',
  decorators: [withGlobalWrapper],
};

interface FontOptions {
  [name: string]: Property.FontFamily;
}

interface ResponsiveFontSizeOptions {
  [number: number]: string;
}

const TypographicScale: StoryObj = {
  render: function Render() {
    const [fonts, setFonts] = useState<FontOptions | undefined>(undefined);
    const [responsiveFontSizes, setResponsiveFontSizes] = useState<
      ResponsiveFontSizeOptions | undefined
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

      const fontSizes = allVars.reduce(
        (allResponsiveFontSizes, [key, value]) => {
          if (key.indexOf('--responsive-font-size') === 0) {
            const number = parseInt(key.substring(23));
            allResponsiveFontSizes[number] = value;
          }
          return allResponsiveFontSizes;
        },
        {} as ResponsiveFontSizeOptions,
      );
      setResponsiveFontSizes(fontSizes);
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
              <div className={styles['typographic-scale']} key={name}>
                <h2 className={styles.heading}>{name}</h2>
                <div style={{ fontFamily }}>
                  {responsiveFontSizes &&
                    Object.entries(responsiveFontSizes).map(
                      ([number, responsiveFontSize]) => (
                        <>
                          <div className={styles.row} key={`${name}-${number}`}>
                            <div className={styles.label}>{number}</div>
                            <div
                              className={styles.preview}
                              style={{
                                fontSize: responsiveFontSize,
                              }}
                            >
                              This text goes from{' '}
                              {typographyVarsMin[parseInt(number) - 1]} to{' '}
                              {typographyVarsMax[parseInt(number) - 1]}.
                            </div>
                          </div>
                        </>
                      ),
                    )}
                </div>
              </div>
            ))}
      </>
    );
  },
  args: {},
};

export default settings;
export { TypographicScale };
