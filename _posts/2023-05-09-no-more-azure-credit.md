---
layout: post
title:  "No more Azure credit... what to do?"
description: "The author is too cheap to pay for hosting."
date:   2023-05-09 22:00:00 +0100
tags: azure blog github
---

I've been using Microsoft Azure for a long time, and as part of my work I've generally had access to a [Visual Studio Subscription](https://visualstudio.microsoft.com/subscriptions/), which comes with a decent chunk of Azure credit (at least $50 a month in local currency, up to $150 for the high-end subscriptions) to run things. The credit isn't *technically* supposed to be used for "production" stuff, but honestly, if my site goes down during a capacity issue or outage, fair play.

I've used [App Service](https://azure.microsoft.com/services/app-service/) to host sites that frankly don't need it for years, and it's only in my most recent role that I've not had access to this. I like it a lot, and recommend it for a pretty wide range of hosting needs for companies.

App Service is very cleverly priced: the free tier is useful to get started, but to get custom domains and TLS, you need the "Basic" tier, which still costs over $10 a month.  Not much, but more than I'm generally willing to pay to host a bunch of static content. At one point in the past, the only version supporting custom domains *and* TLS certs was the full Standard tier, and that's at least $40 a month.

It's possible to get static site hosting working on Azure with storage accounts and the CDN, but it's not possible to provision the CDN with a "free credit" account, so I've never investigated how good it actually is.

It was time to move, and I chose [GitHub Pages](https://pages.github.com) as it seemed pretty easy to set up.

I copied my old static HTML site over to a public GitHub repo, tested github pages URL, then mapped the domain.

Everything seemed to work fine, although I want to use the site more, so I'm going to [move my DNS to Cloudflare]({% post_url 2023-05-10-azure-dns-to-cloudflare %} "link to next post, about moving from Azure DNS to Cloudflare").

*[CDN]: Content Delivery Network
