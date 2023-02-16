module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./source/00-config/breakpoints.css'],
    },
    'postcss-advanced-variables': {},
    [require.resolve('./lib/iff.js')]: {},
    'postcss-rem': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-media-queries': true,
        'custom-properties': false,
      },
    },
    [require.resolve('./lib/responsive-font-size.js')]: {},
    'postcss-nesting': {},
  },
};
