---
title: "Welcome to Compost! :tada:"
description: "This is a demo of the Compost theme for Hugo."
---

{{< lead >}}
A simple, lightweight theme for Hugo built with Tailwind CSS.
{{< /lead >}}

Compost is a simple, lightweight theme for [Hugo](https://gohugo.io). Mainly based on the [Congo](https://github.com/jpanther/congo), also refer to [hugo-starter-tailwind-basic](https://github.com/bep/hugo-starter-tailwind-basic) and so on.

## Features

- Styles are based on [Tailwind CSS](https://tailwindcss.com/docs) 4.x, configured CSS-first in `assets/css/main.css` and compiled with Hugo's `css.TailwindCSS`, plus the official [Typography plugin](https://github.com/tailwindlabs/tailwindcss-typography).
- You can build and test directly with the `hugo` command (using some of the tricks mentioned in [#8343](https://github.com/gohugoio/hugo/issues/8343)).
- 🌐 The article style is specially customized for the Simplified Chinese language (only applied when the lang of html is zh).
- ✨ Automatically resize images with Hugo's built-in function, and add native lazy loading attr (supported by browsers)

## Usage

Requires Hugo v0.166.0 or later and [Node.js](https://nodejs.org/), because the Tailwind CSS CLI is installed with `npm`.

1. Set the theme in the Hugo project as `github.com/canstand/compost`, and add the required options to `hugo.toml`:

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
# required: hugo_stats.json is the content source of the Tailwind CSS stylesheet
[[module.mounts]]
source = 'hugo_stats.json'
target = 'assets/notwatching/hugo_stats.json'
disableWatch = true
[[module.imports]]
path = 'github.com/canstand/compost'

# required: the theme compiles the stylesheet with the Tailwind CSS CLI
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

The demo site lives in `exampleSite`, which is a Hugo project of its own. Like any site using the theme, it needs its own dependencies:

```bash
npm install
hugo mod npm pack --source exampleSite
npm install --prefix exampleSite
hugo server --source exampleSite
```
