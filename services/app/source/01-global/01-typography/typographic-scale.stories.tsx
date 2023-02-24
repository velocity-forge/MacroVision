/* eslint import/no-webpack-loader-syntax: off */
import typographyVarsAsString from '!!raw-loader!../../00-config/vars/typography.css';
import { Meta, Story } from '@storybook/react';
import { Property } from 'csstype';
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
};

interface FontOptions {
  [name: string]: Property.FontFamily;
}

interface ResponsiveFontSizeOptions {
  [number: number]: string;
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

const responsivefontsizes = allVars.reduce(
  (allResponsiveFontSizes, [key, value]) => {
    if (key.indexOf('--responsive-font-size') === 0) {
      const number = parseInt(key.substring(23));
      allResponsiveFontSizes[number] = value;
    }
    return allResponsiveFontSizes;
  },
  {} as ResponsiveFontSizeOptions,
);

const TypographicScale: Story = args => {
  return (
    <>
      {Object.entries(args.fonts as FontOptions).map(([name, fontFamily]) => (
        <div className={styles['typographic-scale']} key={name}>
          <h2 className={styles.heading}>{name}</h2>
          <div style={{ fontFamily }}>
            {Object.entries(
              args.responsivefontsizes as ResponsiveFontSizeOptions,
            ).map(([number, responsiveFontSize]) => (
              <>
                <div className={styles.row}>
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
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
TypographicScale.args = {
  fonts: fonts,
  responsivefontsizes: responsivefontsizes,
};

export default settings;
export { TypographicScale };
