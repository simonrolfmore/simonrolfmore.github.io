---
layout: post
title:  "Removing tracking!"
description: "Maybe I don't want Google and Font Awesome to instrument my visitors"
date:   2023-07-16 21:38:42 +0100
tags: blog css
---

When I set this site up, I used [Google Fonts](https://fonts.google.com) and [Font Awesome](https://www.fontawesome.com) as a way of exploring some nice fonts, getting them served, and using some cute icons for my footer and the [license page](/license).

Now I've looked at the network requests made by the site, I realised I don't necessarily want every visitor (all, erm, none of you) to send a bunch of doubtless-interesting traffic to Google. I also ran into some weirdness with FontAwesome running locally, notably that I'd get weird errors when connecting to my hosted copy of the font.

I also realised that the font is several hundred KB for, uh, \*counts\*... 8 glyphs. To save all of that hassle, I switched to inlining the SVG elements in the HTML. I did this through the cunning method of using Font Awesome's SVG+JS setup, capturing the SVG elements once they were generated, then pasting them back into the HTML.

I'm sure there's a better way.

I also removed the Google Fonts references and found the original versions of the fonts, as credited [here](/license#fonts).

There's now no Javascript on the site except for the Mastodon feed loader, so things should be nice and smooth. Thanks to the amazingly fast response to [this issue I raised](https://gitlab.com/idotj/mastodon-embed-feed-timeline/-/issues/15), that script even works `async` now.
