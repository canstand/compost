---
title: 中文网页排版样例
date: 2021-11-16T00:00:00.000Z
draft: false
description: 参考赫蹏项目调整后的中文正文内容样式，支持深色模式。
tags:
  - markdown
  - css
  - sample
  - tailwindcss
  - typography
  - demo
  - javascript
series:
  - Samples
---

{{< lead >}}
参考赫蹏项目调整后的中文正文内容样式，支持深色模式。
{{< /lead >}}

## 一、样式基础

### 赫蹏

[赫蹏](https://github.com/sivan/heti)（hètí）是专为中文内容展示设计的排版样式增强。它基于通行的中文排版规范而来，可以为网站的读者带来更好的文章阅读体验。

主要特性：

- 贴合网格的排版；
- 全标签样式美化；
- 预置古文、诗词样式；
- 预置多种排版样式（行间注、多栏、竖排等）；
- 多种预设字体族（仅限桌面端）；
- 简/繁体中文支持；
- 自适应黑暗模式；
- 中西文混排美化，不再手敲空格 👏（基于 JavaScript 脚本）；
- 全角标点挤压（基于 JavaScript 脚本）；
- 兼容 _normalize.css_、_CSS Reset_ 等常见样式重置；
- 移动端支持；
- ……

### Tailwindcss Typography

The `@tailwindcss/typography` plugin adds a set of prose classes that can be used to quickly add sensible typographic styles to content blocks that come from sources like markdown or a CMS database.

## 二、测试样式

{{<alert>}}
使用注意：第一，一、二、三级标题增加了字间距，尽量不要包含英文（只是缩写则问题不大）。
第二，建议手动添加中西文之间的空格。因为没有使用 js，所以不支持**自动进行中西文混排美化和标点挤压**。
{{</alert>}}

### 段落文字样式（三级标题）

普通段落内容**加粗**和*斜体*文字，以及  _**既加粗又是斜体**_  的文字。也可以添加~~删除线~~。

> 引用内容

> 多段落引用
>
> 第二段内容
>
> - 无序列表
>   > **嵌套**引用
>   >
>   > 1.  有序列表

#### 段落中换行（四级标题）

普通段落内容后带**双空格结尾**断行  
新行开始

新段落

##### 段落中手动换行，五级标题

普通段落内容后带`<br>`手动断行<br>
新行开始

新段落

###### HTML 标签支持（六级标题）

部分样式必须开启 goldmark 的 unsafe，然后使用 HTML 标签来撰写：

- 标记<mark>重点</mark>内容，不支持 `==marked==` 语法：==marked==
- 上标<sup>1</sup>下标<sub>1</sub>功能，不支持 `X~1~ X^2^` 语法：X~1~ X^2^
- <abbr title="缩略语">缩写</abbr>定义，不支持 `*[HTML]: 超文本标记语言` 语法：\*[HTML]: 超文本标记语言
- <ins>下划线（插入）</ins>标记，不支持 `++插入内容++` 语法：++插入内容++

### 代码样式

行内代码样式与 `tailwindcss-typography` 不一样，去掉了前后的 ` 字符。

代码高亮使用 hugo 内置功能再定制样式。不指明内容类型的代码段时使用的 tailwindcss-typography 默认样式：

```
echo test
```

指明内容类型，则带语法高亮：

```html
<html></html>
```

### 列表

列表前的段落

1. 有序列表一级 ol
   1. 有序列表二级 ol ol
      1. 有序列表三级 ol ol ol
   1. 有序列表二级 ol ol
      - 无序列表三级 ol ol ul
2. 有序列表一级 ol
   - 无序列表二级 ol ul
     1. 有序列表三级 ol ul ol
   - 无序列表二级 ol ul
     - 无序列表三级 ol ul ul

- 无序列表一级 ul
  - 无序列表二级 ul ul
    1. 有序列表三级 ul ul ol
  - 无序列表二级 ul ul
    - 无序列表三级 ul ul ul
- 无序列表一级 ul
  1. 有序列表二级 ul ol
     1. 有序列表三级 ul ol ol
  1. 有序列表二级 ul ol
     - 无序列表三级 ul ol ul

术语定义列表：

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

任务列表：

- [x] 已完成任务
- [ ] 待完成任务

### 表格样式

中文样式包含全边框，Markdown 支持列对齐语法。

| OS/浏览器 | Firefox | Chrome | Safari |
| --------- | :-----: | -----: | ------ |
| OS X      |    ✔    |      ✔ | ✔      |
| Windows   |    ✔    |      ✔ | ✔      |
| Ubuntu    |    ✔    |      ✔ | -      |
