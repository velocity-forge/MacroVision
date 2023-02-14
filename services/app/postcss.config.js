module.exports = {
  plugins: {
    'postcss-advanced-variables': {},
    '@csstools/postcss-global-data': {
      files: ['./source/00-config/breakpoints.css'],
    },
    'postcss-rem': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-media-queries': true,
      },
    },
    [require.resolve('./lib/responsive-font-size.js')]: {},
    'postcss-nesting': {},
  },
};
