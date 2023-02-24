/* eslint import/no-webpack-loader-syntax: off */
import typographyVarsAsString from '!!raw-loader!../../00-config/vars/typography.css';
import { Meta, Story } from '@storybook/react';
import { Property } from 'csstype';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './typographic-scale.module.css';

const settings: Meta = {
  title: 'Global/Typography/Typographic Scale',
};

interface FontOptions {
  [name: string]: Property.FontFamily;
}

interface ResponsiveFontSizeOptions {
  [number: number]: {
    style?: string;
    min?: string;
    max?: string;
  };
}

const allVars = getCssVariables();

const minMaxRegex = ': responsive-font-size\\(([^,\\s]+),? ([^,\\s]+)\\)';

const fonts = allVars.reduce((allFonts, [key, value]) => {
  if (key.indexOf('--font-family') === 0) {
    const name =
      key.substring(14).charAt(0).toUpperCase() + key.substring(14).slice(1);
    allFonts[name] = value;
  }
  return allFonts;
}, {} as FontOptions);

const responsiveFontSizes = allVars.reduce(
  (allResponsiveFontSizes, [key, value]) => {
    if (key.indexOf('--responsive-font-size') === 0) {
      const number = parseInt(key.substring(23));
      // Add the min and max from typographyVarsAsString, because we need the
      // *unparsed* values here, what we wrote before PostCSS worked its magic.
      // It's weird, but so is CSS.
      const minMax = new RegExp(`${key.trim()}${minMaxRegex}`);
      const matchingVar = minMax.exec(typographyVarsAsString);
      allResponsiveFontSizes[number] = {
        style: value,
        min: matchingVar ? matchingVar[1] : undefined,
        max: matchingVar ? matchingVar[2] : undefined,
      };
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
              args.responsiveFontSizes as ResponsiveFontSizeOptions,
            ).map(([number, responsiveFontSize]) => (
              <div className={styles.row} key={number}>
                <div className={styles.label}>{number}</div>
                <div
                  className={styles.preview}
                  style={{
                    fontSize: responsiveFontSize.style,
                  }}
                >
                  This text goes from {responsiveFontSize.min} to{' '}
                  {responsiveFontSize.max}.
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
TypographicScale.args = {
  fonts: fonts,
  responsiveFontSizes: responsiveFontSizes,
};

export default settings;
export { TypographicScale };
