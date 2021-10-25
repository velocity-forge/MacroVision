/** @type {import('next').NextConfig} */

const basePath = '';

module.exports = {
  reactStrictMode: true,
  basePath,
  eslint: {
    dirs: ['source', 'pages'],
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NEXT_BASEPATH': JSON.stringify(basePath || ''),
      }),
    );
    return config;
  },
};
