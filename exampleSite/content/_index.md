---
title: "Welcome to Compost! :tada:"
description: "This is a demo of the Compost theme for Hugo."
---

{{< lead >}}
A simple, lightweight theme for Hugo built with Tailwind CSS.
{{< /lead >}}

Compost is a simple, lightweight theme for [Hugo](https://gohugo.io). Mainly based on the [Congo](https://github.com/jpanther/congo), also refer to [hugo-starter-tailwind-basic](https://github.com/bep/hugo-starter-tailwind-basic) and so on.

## Features

- Styles are based on [Tailwind CSS](https://tailwindcss.com/docs) 3.x, and the official [Typography plugin](https://github.com/tailwindlabs/tailwindcss-typography).
- You can build and test directly with the `hugo` command (using some of the tricks mentioned in [#8343](https://github.com/gohugoio/hugo/issues/8343)). 
- 🌐 The article style is specially customized for the Simplified Chinese language (only applied when the lang of html is zh). 
- ✨ Automatically resize images with Hugo's built-in function, and add native lazy loading attr (supported by browsers)


## Usage

1. Set the theme in the Hugo project as `github.com/canstand/compost`, and add required options to `config.toml`:

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
