---
layout: post
title:  "Moving from Azure DNS to Cloudflare"
date:   2023-05-10 22:00:00 +0100
tags: azure blog cloudflare dns 
---

As [discussed previously]({% post_url 2023-05-09-no-more-azure-credit %}), I've moved my site away from Azure App Service to (for now) GitHub pages.

I wanted to also move my domains away from Azure DNS, so that I can take advantage of Cloudflare's cheaper domain registrar, use [Cloudflare Workers](https://workers.cloudflare.com), and take advantage of their network and very generous free offerings.

This used to be relatively easy: Microsoft's DNS "advanced control panel" was available in the Azure Portal, and linked out to GoDaddy, where you could change `NS` and `SOA` records as much as you want, get registrar transfer codes, etc.

At some point, with the migration to [Azure DNS](https://learn.microsoft.com/en-us/azure/dns/dns-overview), this stopped being possible. You can add *extra* `NS` records, but [not remove the defaults](https://learn.microsoft.com/en-us/azure/dns/dns-zones-records#ns-records).

Cloudflare absolutely [require themselves](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup#update-your-nameservers) to be the first 2 `NS` records, so this was a problem. Adding the Cloudflare records as extras doesn't work.

I contacted Cloudflare support, who were staggeringly unhelpful over the course of several weeks, reiterating the requirement but not telling me I could do about it. Fair enough: this is Microsoft's problem, not theirs.

I eventually found a fairly unhelpful post on the [Microsoft Q&A site](https://learn.microsoft.com/en-us/answers/questions/784472/transfer-domain-created-on-azure-to-cloudflare), which has a useful answer at the bottom, linking to [this extremely useful StackOverflow/ServerFault post](https://serverfault.com/questions/1119663/transfer-domain-and-dns-from-azure-to-cloudflare). This took a lot of searching across DuckDuckGo, Google, and Bing, so I hope having the steps here will help someone out.

It turns out, the old "advanced control panel" *does* still exist. All you do is go to (not *at all* dodgy sounding) URL [https://dcc.secureserver.net/domains](https://dcc.secureserver.net/domains). This previously used some sort of single-sign-on from the Azure portal, but now you have to get yourself a login.

The email address will be the one you used at the point the domain was created, so bear that in mind if (like me), you've moved primary emails.

The password reset process is relatively painless, and you can then go in there and, after dismissing a **whole bunch** of warnings, you can alter the `NS` records. The Azure Portal won't reflect this properly.

You can even get hold of your transfer code, unlock the domain etc. in there rather than some obscure, semi-documented REST calls that I can't even find now I'm looking for them again.

In summary, I *do not recommend* using Azure DNS. It's been, eh, fine for reliability and the APIs are alright, but the level of obfuscation and hassle involved in transferring out has been ridiculous.

Do better, Microsoft.
