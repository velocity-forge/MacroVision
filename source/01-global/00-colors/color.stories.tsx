import { Meta, StoryObj } from '@storybook/react';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './color.module.css';

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
    <div className={styles.group}>
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

const ColorPaletteComponent = ({ brand, grayscale, other }: ColorFamily) => (
  <div>
    {brand && (
      <>
        <h3>Brand</h3>
        {Object.entries(brand).map(([group, colors]) => (
          <ColorGroup
            group={group}
            colors={colors}
            family="brand"
            key={`brand-${group}`}
          />
        ))}
      </>
    )}
    {grayscale && (
      <>
        <h3>Grayscale</h3>
        {Object.entries(grayscale).map(([group, colors]) => (
          <ColorGroup
            group={group}
            colors={colors}
            family="grayscale"
            key={`grayscale-${group}`}
          />
        ))}
      </>
    )}
    {other && (
      <>
        <h3>Other</h3>
        {Object.entries(other).map(([group, colors]) => (
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

const meta: Meta<typeof ColorPaletteComponent> = {
  title: 'Global/Color Palette',
  component: ColorPaletteComponent,
  decorators: [withGlobalWrapper],
  argTypes: {
    brand: {
      table: {
        disable: true,
      },
    },
    grayscale: {
      table: {
        disable: true,
      },
    },
    other: {
      table: {
        disable: true,
      },
    },
  },
};

type Story = StoryObj<typeof ColorPaletteComponent>;

const ColorPalette: Story = {
  args: colorFamilies,
  storyName: 'Color Palette',
};

export default meta;
export { ColorPalette };
