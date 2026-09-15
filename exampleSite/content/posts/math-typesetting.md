---
author: Hugo Authors
title: Math Typesetting
date: 2019-03-08
description: A brief guide to setup KaTeX
math: true
tags: ["sample"]
series:
    - Extra
---

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.

<!--more-->

In this example we will be using [KaTeX](https://katex.org/).

- Create a partial at `layouts/_partials/extend-head.html`; the theme includes it in the `<head>` of every page
- Within this partial reference the [Auto-render Extension](https://katex.org/docs/autorender.html) or host these scripts locally, and load them only on the pages that need them:

```go-html-template
{{ if or .Params.math .Site.Params.math }}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js"
    onload="renderMathInElement(document.body);"></script>
{{ end }}
```

- To enable KaTeX globally set the parameter `math` to `true` in a project's configuration
- To enable KaTeX on a per page basis include the parameter `math: true` in content files

**Note:** Use the online reference of [Supported TeX Functions](https://katex.org/docs/supported.html)

<!-- KaTeX -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css" integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.js" integrity="sha384-pK1WpvzWVBQiP0/GjnvRxV4mOb0oxFuyRxJlk6vVw146n3egcN5C925NCP7a7BY8" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/contrib/auto-render.min.js" integrity="sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl" crossorigin="anonymous"
    onload="renderMathInElement(document.body);"></script>

### Examples

<p>
Inline math: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
</p>

Block math:

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
