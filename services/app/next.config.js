const basePath = '';
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const iconTemplate = require('./source/03-components/Icon/icon-template');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath,
  eslint: {
    dirs: ['source', 'pages'],
  },
  /**
   * Custom Webpack Config
   * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
   */
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NEXT_BASEPATH': JSON.stringify(basePath || ''),
      }),
    );

    config.plugins.push(
      new StylelintWebpackPlugin({
        exclude: ['node_modules', 'storybook'],
      }),
    );

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
            jsx: {
              babelConfig: {
                plugins: [
                  [
                    '@svgr/babel-plugin-remove-jsx-attribute',
                    {
                      elements: ['svg'],
                      attributes: ['isHidden'],
                    },
                  ],
                  [
                    '@svgr/babel-plugin-add-jsx-attribute',
                    {
                      elements: ['svg'],
                      attributes: [
                        {
                          name: 'aria-hidden',
                          value: "isHidden ? 'true' : 'false'",
                          literal: true,
                          position: 'start',
                        },
                        {
                          name: 'role',
                          value: "title ? 'img' : undefined",
                          literal: true,
                          position: 'start',
                        },
                        {
                          name: 'className',
                          value: "clsx('icon', modifierClasses)",
                          literal: true,
                        },
                      ],
                    },
                  ],
                ],
              },
            },
            template: iconTemplate,
          },
        },
      ],
    });
    return config;
  },
};
