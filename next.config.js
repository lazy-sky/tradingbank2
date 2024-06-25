/** @type {import('next').NextConfig} */
const { patchWebpackConfig } = require('next-global-css');
const path = require('path');

// next-global-css is used for importing 'styles/globals.css' during cypress component testing.

module.exports = {
  reactStrictMode: false,
  typescript: {},
  distDir: '.next',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  trailingSlash: true,
};
