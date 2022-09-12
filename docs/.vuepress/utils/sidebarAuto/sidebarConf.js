const getDocPath = require('./getDocPath');
module.exports = {
  '/happiness/books/': [
    getDocPath('读书', false, '/happiness/books/introduction/'),
    getDocPath('人类简史', false, '/happiness/books/01-rljs/'),
  ],
  '/happiness/life-records/': [
    getDocPath('生活', false, '/happiness/life-records/introduction/'),
    getDocPath('日常生活', false, '/happiness/life-records/year2022/'),
  ],
  '/document/frontend/': [
    getDocPath('前端知识库', false, '/document/frontend/introduction/'),
    getDocPath('HTML必知必会', true, '/document/frontend/html/'),
    getDocPath('CSS必知必会', true, '/document/frontend/css/'),
    getDocPath('javascript教程', true, '/document/frontend/javascript/'),
    getDocPath('react教程1', true, '/document/frontend/react/'),
  ],
  '/document/daily-records/': [
    getDocPath('技术日常记录', false, '/document/daily-records/introduction/'),
    getDocPath('2022年', false, '/document/daily-records/year2022/'),
  ],
  '/document/weekly/': [
    getDocPath('周报记录', false, '/document/weekly/introduction/'),
    getDocPath('2022年', false, '/document/weekly/year2022/'),
  ],
  '/document/interview/': [
    getDocPath('前端面试记录', false, '/document/interview/introduction/'),
    getDocPath('2022年', false, '/document/interview/year2022/'),
  ],
  '/document/reading-notes/': [
    getDocPath('前端技术书籍阅读笔记', false, '/document/reading-notes/introduction/'),
    getDocPath('你不知道的JavaScript上册', false, '/document/reading-notes/year2022/'),
  ],
  '/document/business-code/': [
    getDocPath('业务代码记录', false, '/document/business-code/introduction/'),
    getDocPath('2022', false, '/document/business-code/year2022/'),
  ],
};
