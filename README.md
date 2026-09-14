# Compost Theme | Hugo

Compost is a simple, lightweight theme for [Hugo](https://gohugo.io). Mainly based on the [Congo](https://github.com/jpanther/congo), also refer to [hugo-starter-tailwind-basic](https://github.com/bep/hugo-starter-tailwind-basic) and so on.

🌏[Demo site](https://canstand.github.io/compost/) | [中文](https://canstand.github.io/compost/zh)

## Features

- Styles are based on [Tailwind CSS](https://tailwindcss.com/docs) 4.x, and the official [Typography plugin](https://github.com/tailwindlabs/tailwindcss-typography).
- You can build and test directly with the `hugo` command (using some of the tricks mentioned in [#8343](https://github.com/gohugoio/hugo/issues/8343)).
- 🌐 The article style is specially customized for the Simplified Chinese language (only applied when the lang of html is zh).
- ✨ Automatically resize images with Hugo's built-in function, and add native lazy loading attr (supported by browsers)

## Requirements

- Hugo v0.166.0 or later
- [Node.js](https://nodejs.org/) (the Tailwind CSS CLI is installed with `npm`)

## Usage

0. This theme uses `go modules`, not `git submodule`, to ensure that the [requirements](https://gohugo.io/hugo-modules/use-modules/#prerequisite) are met and to see the [instructions](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module). ([Notes for Windows users](https://gohugo.io/getting-started/quick-start/#commands))

1. Add the required configuration to your `hugo.toml`:

```toml
# required: merge the theme's configuration (Tailwind CSS build settings)
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
# required: hugo_stats.json is the content source of the Tailwind CSS
# stylesheet, see assets/css/main.css
[[module.mounts]]
  source = "hugo_stats.json"
  target = "assets/notwatching/hugo_stats.json"
  disableWatch = true
[[module.imports]]
  path="github.com/canstand/compost"

# required: the theme processes the stylesheet with the Tailwind CSS CLI
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

2. Install or upgrade dependencies:

```bash
hugo mod get -u
hugo mod npm pack
npm install
```

3. Then run your project as usual.

```bash
hugo server
```

## Development

The demo site lives in `exampleSite`, which is a Hugo project of its own. It needs its own dependencies, exactly like any site using the theme:

```bash
npm install
hugo mod npm pack --source exampleSite
npm install --prefix exampleSite
hugo server --source exampleSite
```

Note: if you change the dependencies in `package.hugo.json`, re-run
`hugo mod npm pack --source exampleSite`.
