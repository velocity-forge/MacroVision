const path = require('path');
const {
  getCssModuleLocalIdent,
} = require('next/dist/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent');
module.exports = {
  staticDirs: ['../public/'],
  stories: ['../source/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async config => {
    // Support CSS modules, via https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70
    config.module.rules.find(
      rule => rule.test.toString() === '/\\.css$/',
    ).exclude = /\.module\.css$/;

    // Then we tell webpack what to do with CSS modules
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              getLocalIdent: getCssModuleLocalIdent,
              mode: 'pure',
              exportLocalsConvention: 'asIs',
            },
          },
        },
        'postcss-loader',
      ],
    });

    config.module.rules.find(
      rule => rule.test && rule.test.toString().includes('svg'),
    ).exclude = /icons\/.*\.svg$/i;

    config.module.rules.push({
      test: /icons\/.*\.svg$/i,
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
    return config;
  },
};
