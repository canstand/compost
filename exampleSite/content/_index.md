---
title: "Welcome to Compost! :tada:"
description: "This is a demo of the Compost theme for Hugo."
---

{{< lead >}}
A simple, lightweight theme for Hugo built with Tailwind CSS.
{{< /lead >}}

Compost is a simple, lightweight theme for [Hugo](https://gohugo.io). Mainly based on the [Congo](https://github.com/jpanther/congo), also refer to [hugo-starter-tailwind-basic](https://github.com/bep/hugo-starter-tailwind-basic) and so on.

## Features

The main differences with [Congo](https://github.com/jpanther/congo):

- The text style is customized for the simplified Chinese language (automatically applied when lang is zh), which does not affect the entire site English.
- The Tailwind CSS JIT mode is not used. Therefore, you can directly use `hugo server -D` to test, the lack of which is that the build will take longer.

## Usage

1. Set the theme in the Hugo project as `github.com/canstand/compost`:

```toml
theme = 'github.com/canstand/compost'
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
