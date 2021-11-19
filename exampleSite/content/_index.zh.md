---
title: "欢迎使用 Compost 主题! :tada:"
description: "演示 Hugo Compost 主题"
---

{{< lead >}}
使用 Tailwind CSS 构建的简单、轻量级的 Hugo 主题。 
{{< /lead >}}

Compost 是一个简单、轻量级的 [Hugo](https://gohugo.io) 主题。主要基于 [Congo](https://github.com/jpanther/congo) 改造，并参考了 [hugo-starter-tailwind-basic](https://github.com/bep/hugo-starter-tailwind-basic) 等。

## 特性
与 [Congo](https://github.com/jpanther/congo) 的主要区别：
* 针对简体中文语言定制了正文样式（lang 为 zh 时自动应用），不影响全站英文。
* 暂时没用 Tailwind CSS JIT 模式。因此可以直接用 `hugo server -D` 测试，缺占是 build 耗时会长一些。

## 使用

1. 在 Hugo 项目里指定主题为 `github.com/canstand/compost`：
```toml
theme = 'github.com/canstand/compost'
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

克隆项目之后，项目目录下运行 `hugo server -s ./exampleSite` 就可实时测试
