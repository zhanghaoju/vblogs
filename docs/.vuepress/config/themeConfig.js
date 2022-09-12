const nav = require("./themeConfig/nav");
const blogConfig = require("./themeConfig/blogConfig");
const friendLink=require('./themeConfig/friendLink')
module.exports={
    author: '夜雨炊烟',
    authorAvatar: '/avatar.jpg',
    logo: '/avatar.jpg',
    type: 'blog',
    search: true,
    searchMaxSuggestions: 10,
    subSidebar: 'auto',
    version:"1.0.0",
    sidebarDepth: 4,
    lastUpdated: '最近更新',
    startYear: '2022',
    sidebar: require('../utils/sidebarAuto/sidebarConf'),
    // 备案
    // record: 'ICP 备案文案',
    // recordLink: 'ICP 备案指向链接',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // plugins: {
    //     '@vssue/vuepress-plugin-vssue': {
    //         platform: 'github',
    //         owner: 'zhanghaoju',
    //         repo: 'zhanghaoju.github.io',
    //         clientId: '37b0b7fe5c1badddee43',
    //         clientSecret: '63d09f3996398b71710f74b9d7bb195a5ae0bff3',
    //     },
    // },
    // 集成 vssue评论插件
    // vssueConfig: {
    //     platform: 'github',
    //     owner: 'zhanghaoju',
    //     repo: 'vblogs',
    //     clientId: '3606adc2786c9fa2696a',
    //     clientSecret: '66aa4a9ef16f3874b59fc5d22eae622c4c9625a5',
    // },
    
    nav,
    blogConfig,
    friendLink, // 友链
}