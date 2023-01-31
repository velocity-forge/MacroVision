import { Meta } from '@storybook/react';
import styles from './color.module.css';

const settings: Meta = {
  title: 'Global/Color Palette',
};

interface ColorItem {
  name: string;
  value: string;
}

interface ColorGroups {
  [name: string]: ColorItem[];
}

type ColorFamilies = 'brand' | 'grayscale' | 'other';

const isColorFamily = (text: string): text is ColorFamilies =>
  ['brand', 'grayscale', 'other'].includes(text);

type ColorFamily = {
  [name in ColorFamilies]: ColorGroups;
};

const allColors = Array.from(document.styleSheets).reduce(
  (allStyles, sheet) =>
    allStyles.concat(
      Array.from(sheet.cssRules)
        .filter(r => r instanceof CSSStyleRule)
        .reduce((colorVars, rule) => {
          const props = Array.from((rule as CSSStyleRule).style)
            .map(propName => [
              propName.trim(),
              (rule as CSSStyleRule).style.getPropertyValue(propName).trim(),
            ])
            .filter(([propName]) => propName.indexOf('--') === 0);
          return [...colorVars, ...props];
        }, [] as string[][]),
    ),
  [] as string[][],
);
const colorFamilies = allColors.reduce((groupedColors, [key, value]) => {
  let [colorFamily, colorGroup, ...colorName] = key.substring(2).split('-');
  colorFamily = colorFamily.trim();
  if (isColorFamily(colorFamily)) {
    if (colorFamily === 'grayscale') {
      colorName = [colorGroup, ...colorName];
      colorGroup = 'grayscale';
    }
    if (!groupedColors[colorFamily]) {
      groupedColors[colorFamily] = {};
    }
    if (!groupedColors[colorFamily][colorGroup]) {
      groupedColors[colorFamily][colorGroup] = [];
    }
    groupedColors[colorFamily][colorGroup].push({
      name: colorName.join('-'),
      value,
    });
  }
  return groupedColors;
}, {} as ColorFamily);

const ColorPalette = (args: ColorFamily) => (
  <div>
    {args.brand && (
      <>
        <h3>Brand</h3>
        {Object.entries(args.brand).map(([group, colors]) => (
          <div key={group} className={styles.group}>
            {colors.map(({ name, value }) => (
              <div
                className="gesso-storybook-color-swatch"
                key={`brand-${group}-${name}`}
              >
                <div
                  className="gesso-storybook-color-swatch__indicator"
                  style={{ backgroundColor: value }}
                />
                <div className="gesso-storybook-color-swatch__name">{name}</div>
                <div className="gesso-storybook-color-swatch__hex">{value}</div>
              </div>
            ))}
          </div>
        ))}
      </>
    )}
    {args.grayscale && (
      <>
        <h3>Grayscale</h3>
        {Object.entries(args.grayscale).map(([group, colors]) => (
          <div key={group} className="gesso-storybook-color__group">
            {colors.map(({ name, value }) => (
              <div
                className="gesso-storybook-color-swatch"
                key={`brand-${group}-${name}`}
              >
                <div
                  className="gesso-storybook-color-swatch__indicator"
                  style={{ backgroundColor: value }}
                />
                <div className="gesso-storybook-color-swatch__name">{name}</div>
                <div className="gesso-storybook-color-swatch__hex">{value}</div>
              </div>
            ))}
          </div>
        ))}
      </>
    )}
    {args.other && (
      <>
        <h3>Other</h3>
        {Object.entries(args.brand).map(([group, colors]) => (
          <div key={group} className="gesso-storybook-color__group">
            {colors.map(({ name, value }) => (
              <div
                className="gesso-storybook-color-swatch"
                key={`brand-${group}-${name}`}
              >
                <div
                  className="gesso-storybook-color-swatch__indicator"
                  style={{ backgroundColor: value }}
                />
                <div className="gesso-storybook-color-swatch__name">{name}</div>
                <div className="gesso-storybook-color-swatch__hex">{value}</div>
              </div>
            ))}
          </div>
        ))}
      </>
    )}
  </div>
);
ColorPalette.args = colorFamilies;

export default settings;
export { ColorPalette };
