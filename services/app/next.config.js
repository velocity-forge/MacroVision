/** @type {import('next').NextConfig} */

const basePath = '';

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
    return config;
  },
};
