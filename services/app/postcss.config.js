module.exports = {
  plugins: {
    'postcss-rem': {},
    'postcss-preset-env': {
      stage: 3,
    },
    'postcss-advanced-variables': {},
    [require.resolve('./lib/responsive-font-size.js')]: {},
  },
};
