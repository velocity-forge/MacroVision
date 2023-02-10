module.exports = {
  plugins: {
    'postcss-rem': {},
    autoprefixer: {},
    'postcss-advanced-variables': {},
    [require.resolve('./lib/responsive-font-size.js')]: {},
  },
};
