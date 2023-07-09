---
layout: post
title:  "Site style customisation"
description: "Because despite being terrible at this front-end stuff, I do care about it."
date:   2023-07-05 19:00:00 +0100
tags: jekyll css blog
---

Having [got my site working]({% post_url 2023-07-01-jekyll-and-github-pages %}), I also wanted to customise the [Cayman](https://github.com/pages-themes/cayman) theme, which is thankfully [CC0 1.0 Universal](https://github.com/pages-themes/cayman/blob/master/LICENSE) licensed.

The theme uses [SASS](https://sass-lang.com/documentation/syntax/) for styling, which makes CSS a ton easier with useful stuff like variables, the ability to make simple colour adjustments and so on.

It's been a fair while since I touched anything front-end related, and I was pleasantly surprised to find that modern CSS in modern browsers is easier to work with than it used to be. That said, I'm sure I've made some egregious mistakes.

I ran into a couple of very frustrating issues: my SCSS files (extracted from the them then edited) were being roundly ignored, until I realised I'd made a small typo in one of the filenames. Gem-based themes can have any of their files replaced by one that matches the name exactly, but anything that *doesn't* match exactly is (understandably) ignored.

I've updated some colours and tested them at [WhoCanUse](https://www.whocanuse.com) to ensure good visibility for a variety of people, moved a few bits around, updated to the latest FontAwesome glyphs as I wanted [Mastodon](https://joinmastodon.org) icon, and picked out some fonts I like better.

I chose [Raleway](https://fonts.google.com/specimen/Raleway) for body text and most things as it's very readable and just a *little* playful (look a the delightful ligatures on ffl, and that w!), and [Cabin](https://fonts.google.com/specimen/Cabin?query=Cabin) for headings as I prefer it at larger sizes and heavier weights.

I'd like to look at using something like [Jekyll Responsive Images](https://github.com/wildlyinaccurate/jekyll-responsive-image) or [Jekyll Picture Tag](https://rbuchberger.github.io/jekyll_picture_tag/) but nothing I've found yet works out of the box on GitHub Pages, so I'll forego that for now.
