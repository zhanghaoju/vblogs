const getDocPath = require('./getDocPath')
module.exports = {
	"/happiness/books/":[
		getDocPath('读书', false, '/happiness/books/introduction/'),
		getDocPath('人类简史', false, '/happiness/books/01-rljs/'),
	],
	"/happiness/life-records/":[
		getDocPath('生活', false, '/happiness/life-records/introduction/'),
		getDocPath('生活111', false, '/happiness/life-records/2022年/'),
	],
	'/document/frontend/':[
		getDocPath('前端知识库', false, '/document/frontend/introduction/'),
		getDocPath('HTML必知必会', true, '/document/frontend/html/'),
		getDocPath('CSS必知必会', true, '/document/frontend/css/'),
		getDocPath('javascript教程', true, '/document/frontend/javascript/'),
		getDocPath('react教程1', true, '/document/frontend/react/'),
	],
	"/document/daily-records/":[
		getDocPath('技术日常记录', false, '/document/daily-records/introduction/'),
		getDocPath('2022年', false, '/document/daily-records/2022年/'),
	],
	"/document/weekly/":[
		getDocPath('周报记录', false, '/document/weekly/introduction/'),
		getDocPath('2022年', false, '/document/weekly/2022年/'),
	],
	"/document/interview/":[
		getDocPath('前端面试记录', false, '/document/interview/introduction/'),
		getDocPath('2022年', false, '/document/interview/2022年/'),
	],
	"/document/reading-notes/":[
		getDocPath('前端技术书籍阅读笔记', false, '/document/reading-notes/introduction/'),
		getDocPath('你不知道的JavaScript上册', false, '/document/reading-notes/2022年/'),
	],
	"/document/business-code/":[
		getDocPath('业务代码记录', false, '/document/business-code/introduction/'),
		getDocPath('2022', false, '/document/business-code/2022年/'),
	]
}
