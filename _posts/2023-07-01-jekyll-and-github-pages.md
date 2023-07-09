---
layout: post
title:  "Jekyll, GitHub Pages, and the pain thereof"
date:   2023-07-01 22:00:00 +0100
tags: jekyll github blog
---

Having [moved my site to GitHub Pages]({% post_url 2023-05-09-no-more-azure-credit %}) and [moved my DNS to Cloudflare]({% post_url 2023-05-10-azure-dns-to-cloudflare %}), I wanted to revisit the old janky static HTML site and build something more modern.

My [wife Ashley's site](https://ashley.rolfmore.com) works well on Jekyll, so I figured I'd give it a go. I want something that lets me add content without so much hassle, and I'm trying to be better at documenting the things I'm doing in the open.

I [read the Jekyll docs](https://jekyllrb.com/docs/) when I helped Ashley out, as she ran into a few odd quirks around system Ruby installs, theme gems vs. normal files, and a few other bits.

Being, well, me, I decided that I wanted a particular style for the site, and that meant switching themes. This looks [super simple](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll) on paper. Reader, it is in fact *not* simple.

One of the nice things about ["Gem-based themes"](https://jekyllrb.com/docs/themes/#understanding-gem-based-themes) is that they wrap everything up in a single dependency that you can't obviously see or touch.

One of the deeply annoying things about them is that they wrap everything up in a single dependency that you can't obviously see or touch.

I spent a good bit of time just smacking my head against vaguely unhelpful error messages whereby the theme gem wouldn't load, or would load but wouldn't be visible etc. Eventually, I fixed this by starting again with a completely clean site, just making the minimal changes needed to switch theme, and re-creating/copying the bits I'd done previously. This certainly didn't fix everything.

After a bunch of searching and failures, I ran across and [excellent blog post](https://www.natalyakosenko.com/2017-12-23-how-to-switch-jekyll-theme-on-github-pages-site) which laid out the key issues: it's all fine and well to switch theme, but if your page layout *also* change, then **nothing bloody works**. I used Natalya's layouts and templates as a basis for my own. Which of course means, I cloned them then made some changes to suit myself. Go open source!

Once I'd got this all working, I set about [customising things]({% post_url 2023-07-05-customising-my-site %}).
