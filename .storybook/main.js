const path = require('path');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const YAML = require('yaml');

module.exports = {
  staticDirs: ['../public'],
  stories: ['../source/**/*.stories.@(js|jsx|ts|tsx)', '../source/**/*.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },
  webpackFinal: async config => {
    config.plugins.push(
      new StylelintWebpackPlugin({
        exclude: ['node_modules', 'storybook', '.next'],
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
    config.module.rules.find(
      rule => rule.test && rule.test.toString().includes('css'),
    ).resourceQuery = {
      not: /raw/,
    };
    config.module.rules.push({
      test: /\.css$/,
      resourceQuery: /raw/,
      type: 'asset/source',
    });
    return config;
  },
};
