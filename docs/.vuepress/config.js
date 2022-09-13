const head = require('./config/head');
const plugins = require('./config/plugins');
const themeConfig = require('./config/themeConfig');
module.exports = {
  title: '夜雨炊烟',
  description: '读书的人可以体验一千种人生，不读书的人只能活一次。',
  base: '/vblogs/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  markdown: {
    lineNumbers: true,
  },
  head,
  themeConfig,
  plugins,
};
