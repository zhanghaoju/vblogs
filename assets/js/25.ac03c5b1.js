(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{580:function(s,a,t){"use strict";t.r(a);var n=t(9),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("前言：网上各种安装教程参差不齐，反复尝试了好几遍，中间耽误了很长时间，所以特意记录一下")])]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("建议使用 Homebrew安装，macOS 安装 Git 最好用 Homebrew，方便快捷  "),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/59805070",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mac必备神器Homebrew"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("brew install git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装方式有很多，教程网上一大堆，就不多赘述了")]),s._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("安装完成之后下面就是配置了，首先进入.ssh文件夹")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~ /.ssh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("注：初始化的情况下是没有config文件夹的，后面会用到")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("录入下方命令，默认回车，生成GitHub和GitLab对应的公私密钥")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa -C  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'github账户邮箱'")]),s._v("  -f ~/.ssh/id_rsa_gitlab\nssh-keygen -t rsa -C  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab账户邮箱'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("code",[s._v("-f ~/.ssh/id_rsa_gitlab")]),s._v("：作为别名用于区分")]),s._v(" "),t("p",[s._v("这个时候再使用ls命令就可以看到生成的密钥了，使用命令 cat  id_rsa_github.pub会显示github对应的公钥，copy下来")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" id_rsa_github.pub\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://vuepres-images.oss-cn-shanghai.aliyuncs.com/vue-blog/deploy_git1.png",alt:"img"}})]),s._v(" "),t("ol",[t("li",[s._v("以GitHub为例，settings->SSH keys->new SSH keys 将copy的公钥粘贴进来，nice！！！离成功不远了")]),s._v(" "),t("li",[s._v("接下来就是要配置生成的config文件了，进入.ssh文件夹下，使用命令：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进行配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Host ssh.gitlab.com\nHostName ssh.gitlab.com\nUser xxx@inc.com\nPort "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\nIdentityFile ~/.ssh/id_rsa\n\nHost github.com\nHostName github.com\nUser xxxxx@outlook.com    // 邮箱地址\nIdentityFile ~/.ssh/id_rsa_github\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("注：如果公司gitlab端口是22的话需要在gitxx域名前面加上ssh，不然会报错："),t("strong",[s._v("ssh: connect to host github.com port 22: Connection timed out")])]),s._v(" "),t("p",[s._v("网上也有一些教程配置说加443端口，不同公司的权限端口配置不一样，所以我试了八百遍，确实不行......")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://gist.github.com/Tamal/1cc77f88ef3e900aeae65f0e5e504794",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("接下来就是测试是否链接成功了，在测试之前，我们还要完成一个前置步骤")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 全局配置\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"账户名"')]),s._v("                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 账户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxx@inc.com"')]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公司邮箱")]),s._v("\n\n// 本地配置\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local user.name  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'夜雨炊烟'")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local user.email  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxxx@outlook.com'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v('在进行本地配置的时候需要在一个已有的github仓库中才可以，不然会有冲突，设置之后如果git pull的时候出现：You can replace "git config" with "git config --global"相关的提示')]),s._v(" "),t("p",[s._v("可以参考下面链接："),t("a",{attrs:{href:"https://blog.csdn.net/BIG_PEI/article/details/122329816",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("好了，离成功只有一步了，进行测试链接是否成功")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -t git@gitlab.com  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 视具体公司域名地址而定")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("大功告成！")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://vuepres-images.oss-cn-shanghai.aliyuncs.com/vue-blog/deploy_git2.png",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[s._v("#")]),s._v(" 遇到的问题")]),s._v(" "),t("ol",[t("li",[s._v("在进行测试链接的时候报错：")])]),s._v(" "),t("p",[s._v("The authenticity of host 'github.com(xxxxxx)' can't be established")]),s._v(" "),t("p",[s._v("这个时候会让你选择确定是否链接，输入 yes 回车，因为ssh为了安全，会从本地文件的known_hosts (.ssh文件夹中，如果没有生成，新建一个文件就好)中查看已知host.输入yes回车,就会往known_hosts里面新增一条记录。下次再访问就OK了")]),s._v(" "),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),t("p",[s._v("查看全局配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("取消全局配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset name\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset email\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);