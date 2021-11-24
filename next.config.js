/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  env: {
    NOTION_SECRET: 'secret_77m2rDOFASj8ohgHhxgujvGVC8trS4IHyqoBkvAqXUI',
    PAGE_ID: '7d74cc39377d436d887d9c9c3b7aacac'
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
