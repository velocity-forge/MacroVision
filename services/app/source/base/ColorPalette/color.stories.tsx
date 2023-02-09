import { Meta } from '@storybook/react';
import getCssVariables from '../../helpers/storybook/getCssVariables';
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

const allVars = getCssVariables();
const colorFamilies = allVars.reduce((groupedColors, [key, value]) => {
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

const ColorItem = ({
  name,
  value,
}: {
  name: string;
  value: string;
}): JSX.Element => {
  return (
    <div className={styles.swatch}>
      <div className={styles.indicator} style={{ backgroundColor: value }} />
      <div className={styles.name}>{name}</div>
      <div className={styles.hex}>{value}</div>
    </div>
  );
};

const ColorGroup = ({
  group,
  colors,
  family,
}: {
  group: string;
  colors: ColorItem[];
  family: ColorFamilies;
}) => {
  return (
    <div key={group} className={styles.group}>
      {colors.map(({ name, value }) => (
        <ColorItem
          name={`${group}-${name}`}
          value={value}
          key={`${family}-${group}-${name}`}
        />
      ))}
    </div>
  );
};

const ColorPalette = (args: ColorFamily) => (
  <div>
    {args.brand && (
      <>
        <h3>Brand</h3>
        {Object.entries(args.brand).map(([group, colors]) => (
          <ColorGroup
            group={group}
            colors={colors}
            family="brand"
            key={`brand-${group}`}
          />
        ))}
      </>
    )}
    {args.grayscale && (
      <>
        <h3>Grayscale</h3>
        {Object.entries(args.grayscale).map(([group, colors]) => (
          <ColorGroup
            group={group}
            colors={colors}
            family="grayscale"
            key={`grayscale-${group}`}
          />
        ))}
      </>
    )}
    {args.other && (
      <>
        <h3>Other</h3>
        {Object.entries(args.other).map(([group, colors]) => (
          <ColorGroup
            group={group}
            colors={colors}
            family="other"
            key={`other-${group}`}
          />
        ))}
      </>
    )}
  </div>
);
ColorPalette.args = colorFamilies;

export default settings;
export { ColorPalette };
