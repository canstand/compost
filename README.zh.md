# Hugo Compost 主题

Compost 是一个简单、轻量级的 [Hugo](https://gohugo.io) 主题。主要基于 [Congo](https://github.com/jpanther/congo) 改造，并参考了 [hugo-starter-tailwind-basic](https://github.com/bep/hugo-starter-tailwind-basic) 等。

🌏[演示站点](https://canstand.github.io/compost/zh)

## 特性

- 样式基于 [Tailwind CSS](https://tailwindcss.com/docs) 4.x，以及官方的 [Typography 插件](https://github.com/tailwindlabs/tailwindcss-typography)。
- 可以使用 `hugo` 命令直接构建和测试（使用了 [#8343](https://github.com/gohugoio/hugo/issues/8343) 中提到的一些技巧）。
- 🌐 特别为简体中文语言定制了文章样式（只在 html 的 lang 为 zh 时应用）。
- ✨ 使用 Hugo 内置功能自动调整图片大小，并添加原生延迟加载属性。

## 要求

- Hugo v0.166.0 或更高版本
- [Node.js](https://nodejs.org/)（Tailwind CSS CLI 通过 `npm` 安装）

## 使用

0. 本主题使用 `go modules`，不是 `git submodule`，先确认满足[要求](https://gohugo.io/hugo-modules/use-modules/#prerequisite)并阅读[说明](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module)。（Windows 用户额外[注意](https://gohugo.io/getting-started/quick-start/#commands)）

1. 在 Hugo 项目配置文件 `hugo.toml` 里添加必要的配置：

```toml
# required: 合并主题的配置（Tailwind CSS 构建相关）
[build]
  _merge = 'deep'

# required
[markup]
  _merge = 'deep'

# for better seo
[minify]
  _merge = 'deep'

[module]
[[module.mounts]]
  source = 'assets'
  target = 'assets'
# required: hugo_stats.json 是 Tailwind CSS 的内容来源，见 assets/css/main.css
[[module.mounts]]
  source = "hugo_stats.json"
  target = "assets/notwatching/hugo_stats.json"
  disableWatch = true
[[module.imports]]
  path="github.com/canstand/compost"

# required: 主题使用 Tailwind CSS CLI 处理样式表
[security]
  [security.exec]
    allow = [
      '^(dart-)?sass$',
      '^go$',
      '^git$',
      '^node$',
      '^postcss$',
      '^tailwindcss$',
    ]
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

## 开发

演示站点位于 `exampleSite`，它本身就是一个完整的 Hugo 项目，需要像普通站点一样安装依赖：

```bash
npm install
hugo mod npm pack --source exampleSite
npm install --prefix exampleSite
hugo server --source exampleSite
```

注意：如果修改了 `package.hugo.json` 中的依赖，需要重新执行
`hugo mod npm pack --source exampleSite`。
