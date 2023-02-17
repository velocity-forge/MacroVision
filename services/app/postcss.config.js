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
        // Enable if you don't need RTL support (or will provide your own)
        // and you *do* need to support browsers that do not support
        // logical properties (e.g. Opera Mini, IE 11, Safari 14)
        'float-clear-logical-values': false,
        'logical-properties-and-values': false,
      },
    },
    [require.resolve('./lib/responsive-font-size.js')]: {},
    'postcss-nesting': {},
  },
};
