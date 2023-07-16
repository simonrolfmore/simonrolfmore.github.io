---
layout: license
title: License
permalink: /license
---

That means, you can use anything posted here for any purpose you like, including commercial use. Just credit me.

If you use anything here for something I deem evil or even merely unpleasant (including but not limited to racism, homophobia, transphobia, or cruelty in general), I *reserve the right to call you out*, make fun of you, not support you or your products, and generally assert my duty to make moral decisions.

Apart from the Mastodon timeline widget listed below, the software here (CSS, Liquid scripts, Jekyll customisations) is [MIT Licensed](https://opensource.org/license/MIT/), as is Jekyll itself. Feel free to use any of my customisations, code etc - they're all in the [GitHub repo for this site](https://github.com/simonrolfmore/simonrolfmore.github.io). I would love to hear about it if you find anything useful, but you aren't obliged by the license to do so.

## MIT License

Copyright {{ site.time | date: '%Y' }} {{ site.author }}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Mastodon embedded timeline feed

The script I use to show my mastodon feed is the excellent open source ([AGPL-3.0 Licensed](https://gitlab.com/idotj/mastodon-embed-feed-timeline/-/blob/master/LICENSE)) [`mastodon-embed-feed-timeline`](https://gitlab.com/idotj/mastodon-embed-feed-timeline/). The author, [idotj](http://www.idotj.com/), is extremely responsive to bug reports as I found when initially trying to load the widget using `async` scripts.

I have made a few small modifications to the CSS file to match my site colours, and renamed it to `mastodon-timeline.scss` so that it gets bundled in as part of my main SASS pre-process. I've also updated the JS file in line with the setup instructions, and cherry-picked a small change that the author made for me which will be merged into the main branch soon. The source for these are available (along with the rest of the code) on [the GitHub repo for this site](https://github.com/simonrolfmore/simonrolfmore.github.io).

## FontAwesome

I use some SVG glyphs from [FontAwesome Free](https://www.fontawesome.com), which is [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) licensed. The license is [here](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt). I have adapted the existing code to remove the need for Javascript and reference the SVG files directly, plus stripping out all of the icons that I'm not using for the site for efficiency. The source for this is available in the [GitHub repo for this site](https://github.com/simonrolfmore/simonrolfmore.github.io).

## Fonts

The fonts I use are licensed under the [SIL Open Font License, 1.1](http://scripts.sil.org/OFL).

### Cabin

I use the Cabin font for my headings. This is credited to [Pablo Impellari](https://www.impellari.com) and is downloaded from [their GitHub account](https://github.com/impallari/Cabin). I used [CloudConvert](https://www.cloudconvert.com) to convert them from TTF to WOFF and WOFF2 format for use in browsers.

### Raleway

Raleway is my main font, first designed by [Matt McInerney](https://blog.matt.cc/) then added to by [Pablo Impellari](https://www.impellari.com) and Rodrigo Fuenzalida in 2012 and iKerned by Igino Marini. In 2013 the Italics where added, and most recently — a variable version (which is what I use).

This was downloaded from [The League of Movable Type](https://www.theleagueofmoveabletype.com/raleway) using [their latest GitHub release](https://github.com/theleagueof/raleway/releases/tag/4.101) and already provided in WOFF and WOFF2 format, so thanks for that.

### Favicon.io

The favicon is also generated from the Raleway font, courtesy of [Favicon.io](https://favicon.io).
