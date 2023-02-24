const basePath = '';

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
