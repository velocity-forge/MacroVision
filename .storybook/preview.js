import '../source/00-config/index.css';
import sourceSansPro from '../source/01-global/fonts/source-sans';
import '../source/01-global/index.css';
import '../source/06-utility/index.css';

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Global',
        ['Color Palette', '*'],
        'Layouts',
        'Components',
        'Templates',
        'Pages',
      ],
      includeName: true,
    },
  },
};

// Toolbar to test multiple writing directions.
// See https://storybook.js.org/docs/react/essentials/toolbars-and-globals#advanced-usage
// for an example of using specific locales rather than general page orientations.
const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Writing direction',
    defaultValue: 'ltr',
    toolbar: {
      icon: 'compass',
      items: [
        { value: 'ltr', title: 'Left-to-right' },
        { value: 'rtl', title: 'Right-to-left' },
        { value: 'vrl', title: 'Vertical right-to-left' },
        { value: 'vlr', title: 'Vertical left-to-right' },
      ],
    },
  },
};

const withWritingDirection = (Story, context) => {
  const { direction } = context.globals;
  return (
    <div
      dir={direction === 'rtl' || direction === 'vrl' ? 'rtl' : 'ltr'}
      style={{
        writingMode:
          direction === 'vrl'
            ? 'vertical-rl'
            : direction === 'vlr'
              ? 'vertical-lr'
              : 'horizontal-tb',
      }}
    >
      <Story />
    </div>
  );
};

const withFonts = Story => (
  <div
    className={sourceSansPro.variable}
    style={{ display: 'contents', fontFamily: 'var(--font-family-primary)' }}
  >
    <Story />
  </div>
);

const decorators = [withWritingDirection, withFonts];

const preview = {
  parameters,
  globalTypes,
  decorators,
};

export default preview;
