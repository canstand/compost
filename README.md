# Compost Theme | Hugo

Compost is a simple, lightweight theme for [Hugo](https://gohugo.io). Mainly based on the [Congo](https://github.com/jpanther/congo), also refer to [hugo-starter-tailwind-basic](https://github.com/bep/hugo-starter-tailwind-basic) and so on. 

🌏[Demo site](https://canstand.github.io/compost/)

## Features
The main differences with [Congo](https://github.com/jpanther/congo):
- The text style is customized for the [Chinese language](https://canstand.github.io/compost/zh/posts/typography/) (automatically applied when lang is zh), which does not affect the entire site English.
- The Tailwind CSS JIT mode is not used. Therefore, you can directly use `hugo server -D` to test, the lack of which is that the build will take longer. 

## Usage

1. Set the theme in the Hugo project as `github.com/canstand/compost`, and add build option to `config.toml`:
```toml
theme = 'github.com/canstand/compost'

[build]
writeStats = true
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
