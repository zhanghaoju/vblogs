---
title: meta视口标签详解
date: 2022-01-07
categories:
- HTML
tags:
  - HTML视口
---

## viewport 的作用和原理是什么？

- 作用：让当前 viewport 的宽度等于设备的宽度，同时不允许用户进行手动缩放。
- 原理：移动端浏览器通常都会在一个比移动端屏幕更宽的虚拟窗口中渲染页面，这个虚拟窗口就是viewport；目的是正常展示没有做移动端适配的网页，让他们完整的展示给用户。

## 标准视口标签的设置

```html
 <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

| 属性          | 解释说明                                         |
| ------------- | ------------------------------------------------ |
| width         | 宽度设置的是viewport，可以设置device-width特殊值 |
| initial-scale | 初始缩放比，大于0的数字                          |
| maximum-scale | 最大缩放比，大于0的数字                          |
| minimum-scale | 最小缩放比，大于0的数字                          |
| user-scalable | 用户是否可以缩放，yes或no（1或0）                |

## meta标签的组成

meta标签共有两个属性，它们分别是http-equiv属性和name属性

### name

主要用于描述网页，与之对应的属性是content，content中的内容主要是便于搜索引擎机器人查找信息和分类信息用的。

- 语法格式：

```plain
 <meta name="参数" content="具体的参数值">
```

- name属性的参数如下表：

| 参数名                    | 作用                                                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keywords(关键字)          | 用来告诉搜索引擎你的网页的关键字是什么？                                                                                                                                |
| description(网页内容描述) | 用来告诉搜索引擎你的网站的主要内容                                                                                                                                      |
| robots(机器人向导)        | 用来告诉搜索机器人哪些网页需要索引，哪些网页不需要索引。 [具体参数参考谷歌官方文档](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag?hl=zh-cn) |
| author(作者)              | 标注网页的作者                                                                                                                                                          |

### http-equiv

相当于http文件头的作用。它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值。

- 语法格式：

```html
 <meta http-equiv="参数" content="参数变量值">
```

http-equiv属性主要参数如下表：

| 参数名                             | 作用                                                                                                                                                                                |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expires(期限)                      | 可用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输。注：必须使用GMT的时间格式                                                                                           |
| pragma(catch模式)                  | 禁止浏览器从本地计算机的缓存中访问页面内容。注：设置之后，用户无法脱机浏览网页                                                                                                      |
| refresh(刷新)                      | 自动刷新并指向新页面 附用法：metahttp-equiv="Refresh"content="2;URL=http://www.baidu.com"(注意后面的引号，分别在秒数的前面和网址的后面) 注：其中的2是指停留2秒钟后自动刷新到URL网址 |
| set-cookie(cookie设定)             | 如果网页过期，对应的cookie也将会删除                                                                                                                                                |
| window-target(显示窗口的设定)      | 强制页面在窗口以独立页面显示 注：用来防止别人在框架里调用自己的页面                                                                                                                 |
| content-type(显示字符集的设定)     | 设置页面显示使用的字符集                                                                                                                                                            |
| content-Language（显示语言的设定） | 用于语言的设定                                                                                                                                                                      |
| Cache-Control                      | 指定请求和响应遵循的缓存机制。 （下面单独介绍）                                                                                                                                     |

`Cache-Control`指定请求和响应遵循的缓存机制。在请求消息或响应消息中设置`Cache-Control`并不会修改另一个消息处理过程中的缓存处理过程。

请求时的缓存指令包括`no-cache`、`no-store`、`max-age`、`max-stale`、`min-fresh`、`only-if-cached`，响应消息中的指令包括`public`、`private`、`no-cache`、`no-store`、`no-transform`、`must-revalidate`、`proxy-revalidate`、`max-age`。
各个消息中的指令含义如下 ：

| 指令名称  | 作用                                                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| public    | 指示响应可被任何缓存区缓存                                                                                                           |
| Private   | 指示对于单个用户的整个或部分响应消息，不能被共享缓存处理。这允许服务器仅仅描述当用户的部分响应消息，此响应消息对于其他用户的请求无效 |
| no-cache  | 指示请求或响应消息不能缓存                                                                                                           |
| no-store  | 用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存。                                                   |
| max-age   | 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应                                                                           |
| min-fresh | 指示客户机可以接收响应时间小于当前时间加上指定时间的响应                                                                             |
| max-stale | 指示客户机可以接收超出超时期间的响应消息。如果指定max-stale消息的值，那么客户机可以接收超出超时期指定值之内的响应消息。              |

meta视口标签对于SEO搜索引擎优化具有很大的作用和实践意义，后续会继续补充详细的用法作用和其他未说明的属性
