---
title: "欢迎使用 Compost 主题! :tada:"
description: "演示 Hugo Compost 主题"
---

{{< lead >}}
使用 Tailwind CSS 构建的简单、轻量级的 Hugo 主题。
{{< /lead >}}

Compost 是一个简单、轻量级的 [Hugo](https://gohugo.io) 主题。主要基于 [Congo](https://github.com/jpanther/congo) 改造，并参考了 [hugo-starter-tailwind-basic](https://github.com/bep/hugo-starter-tailwind-basic) 等。

## 特性

- 样式基于 [Tailwind CSS](https://tailwindcss.com/docs) 3.x，以及官方的 [Typography 插件](https://github.com/tailwindlabs/tailwindcss-typography)。
- 可以使用 `hugo` 命令直接构建和测试（使用了 [#8343](https://github.com/gohugoio/hugo/issues/8343) 中提到的一些技巧）。 
- 🌐 特别为简体中文语言定制了文章样式（只在 html 的 lang 为 zh 时应用）。
- ✨ 使用 Hugo 内置功能自动调整图片大小，并添加原生延迟加载属性。

## 使用

1. 在 Hugo 项目里指定主题为 `github.com/canstand/compost`，并且配置需要从主题合并的默认选项：

```toml
theme = 'github.com/canstand/compost'

# required
[build]
_merge = 'deep'

# required
[markup]
_merge = 'deep'

# for better seo
[minify]
_merge = 'deep'
```

2. 安装或升级依赖：

```bash
hugo mod get -u
hugo mod npm pack
npm install
```

3. 之后按正常开发与测试：

```bash
hugo server
```

## 二次开发

克隆项目之后，项目目录下运行 `hugo server -s ./exampleSite` 就可以实时测试了
