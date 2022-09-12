module.exports=[
    // 更新刷新插件
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
    // 复制插件
    ['vuepress-plugin-nuggets-style-copy', {
        copyText: '复制代码',
        tip: {
            content: '复制成功!'
        }
    }],
    // 最近更新
    [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
            transformer: (timestamp, lang) => {
                const dayjs = require('dayjs') // https://day.js.org/
                return dayjs(timestamp).format('YYYY/MM/DD HH:mm:ss')
            }
        }
    ],
    // 分页
    ['@vuepress-reco/vuepress-plugin-pagation', {
        perPage: 10
        }
    ],
    // 消息弹窗
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
        width: '300px', // 默认 260px
        title: '消息提示',
        body: [
            {
                type: 'title',
                content: '关注公众号',
                style: 'text-aligin: center;'
            },
            {
                type: 'image',
                src: 'https://vuepres-images.oss-cn-shanghai.aliyuncs.com/vue-blog/weixin.JPG'
            }
        ],
        // footer: [
        //     {
        //         type: 'button',
        //         text: '打赏',
        //         link: '/donate'
        //     }
        // ]
    }],
    // 评论插件
    [
        'vuepress-plugin-mygitalk', {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 是否开启首页评论(default: true)
        home: false,
        // Gitalk配置
        gitalk: {
            // GitHub Application Client ID.
            clientID: '3606adc2786c9fa2696a',
            // GitHub Application Client Secret.
            clientSecret: '66aa4a9ef16f3874b59fc5d22eae622c4c9625a5',
            // GitHub repository. 存储评论的 repo
            repo: 'vblogs',
            // GitHub repository 所有者，可以是个人或者组织。
            owner: 'zhanghaoju',
            // 设置语言(default: zh-CN)
            language: 'zh-CN',
        }
    }],
]