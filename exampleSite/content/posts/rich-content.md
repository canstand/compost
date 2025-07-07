---
title: "Rich Content"
date: 2019-03-10
description: "A brief description of Hugo Shortcodes"
summary: "This is an _example_ of a **rich** content summary."
tags: ["shortcodes", "privacy", "sample", "gist", "twitter", "youtube", "vimeo"]
---

Hugo ships with several [built-in shortcodes](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes) for rich content, along with a [privacy config](https://gohugo.io/about/hugo-and-gdpr/) and a set of _simple shortcodes_ that enable static and no-JS versions of various social media embeds.

## YouTube

Below is an example using the built-in `youtube` shortcode.

{{< youtube ZJthWmvUzzc >}}

## Twitter

This example uses the `twitter_simple` shortcode to output a Tweet. It requires two named parameters `user` and `id`.

{{< x user="DesignReviewed" id="1085870671291310081" >}}

## Vimeo

The `vimeo_simple` shortcode will embed a Vimeo video.

{{< vimeo_simple 48912912 >}}
