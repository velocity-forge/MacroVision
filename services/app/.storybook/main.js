const path = require('path');
const {
  getCssModuleLocalIdent,
} = require('next/dist/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent');
const { css } = require('@storybook/theming');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = {
  staticDirs: [path.resolve(__dirname, '../public')],
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
    config.plugins.push(
      new StylelintWebpackPlugin({
        exclude: ['node_modules', 'storybook'],
      }),
    );

    // Support CSS modules, via https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70
    const cssRule = config.module.rules.find(
      rule => rule.test.toString() === '/\\.css$/',
    );
    cssRule.exclude = /\.module\.css$/;

    // Then we tell webpack what to do with CSS modules.
    // We can't just call 'css-loader' here because Storybook has its own
    // specific css-loader that can resolve files in staticDirs.
    const cssLoader = cssRule.use.find(r => r.loader.includes('css-loader'));
    config.module.rules.push({
      test: /\.module\.css$/,
      sideEffects: true,
      use: [
        'style-loader',
        {
          ...cssLoader,
          options: {
            ...cssLoader.options,
            importLoaders: 1,
            modules: {
              getLocalIdent: getCssModuleLocalIdent,
              mode: 'pure',
            },
          },
        },
        'postcss-loader',
      ],
    });

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
    return config;
  },
};
