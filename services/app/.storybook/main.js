const path = require('path');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const YAML = require('yaml');

module.exports = {
  staticDirs: [path.resolve(__dirname, '../public')],
  stories: ['../source/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async config => {
    config.plugins.push(
      new StylelintWebpackPlugin({
        exclude: ['node_modules', 'storybook'],
      }),
    );
    config.module.rules.find(
      rule => rule.test && rule.test.toString().includes('svg'),
    ).exclude = /Icon\/icons\/.*\.svg$/i;
    config.module.rules.push({
      test: /Icon\/icons\/.*\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: ['removeDimensions'],
            },
            replaceAttrValues: {
              '#000': 'currentColor',
            },
            titleProp: true,
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.ya?ml$/i,
      type: 'json',
      parser: {
        parse: YAML.parse,
      },
    });
    return config;
  },
};
