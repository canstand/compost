---
title: "Welcome to Compost! :tada:"
description: "This is a demo of the Compost theme for Hugo."
---

{{< lead >}}
A simple, lightweight theme for Hugo built with Tailwind CSS.
{{< /lead >}}

Compost is a simple theme for [Hugo](https://gohugo.io). It is based on the original [hugo-starter-tailwind-basic](https://github.com/bep/hugo-starter-tailwind-basic) and [Congo](https://github.com/jpanther/congo).

## Usage (As a theme)

Import `github.com/canstand/compost` into your project, and then run:

```bash
hugo mod npm pack
npm install
```

You need to add this to your `config.toml` (the stats are used by the CSS purging):

```toml
[build]
writeStats = true
```

Then run your project as usual.
