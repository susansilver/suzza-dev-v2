---
title: URL Routing
description: How to create pagination for your Astro archives.
---
This is a reminder that if you get stuck check the docs. 

It wasn’t a problem to get routes to work for me. The issue was that my first page was not at /blog. Instead, it was at /blog/1. This did not seem right.

I got lucky. There was a [Stack Overflow thread](https://stackoverflow.com/questions/74888357/generate-astro-index-page-as-well-as-pagination) on this very topic. The explanation was simpler than expected. The answer[ was in the docs](https://docs.astro.build/en/core-concepts/routing/#rest-parameters) the whole time.


## [page].astro and [...page].astro

When you want dynamic routing, you use a [getStaticPaths function](https://docs.astro.build/en/core-concepts/routing/#pagination). This tells Astro how to create those routes. [With pagination](https://docs.astro.build/en/core-concepts/routing/#pagination), each page only shows the amount of posts you want. 

I used this to show six posts per page for the blog at Beauty of Mathematics. This creates three pages for eighteen published posts.

You should be aware of the differences between [page] and [...page]

Originally, I had a [page].astro file in a blog folder in the pages directory. The navigation for the blog started at the url /blog/1. This is what [page].astro does. It will generate pages dynamically that start at 1. 

Using [...page].astro was what I needed [for the first page to start with /blog](https://docs.astro.build/en/core-concepts/routing/#rest-parameters). The difference is that [...page].astro generates routes to match file paths at any depth. Using the rest parameter is why the top level is /blog. 


## Final Thoughts on Routing

This is the trickiest part of working with Astro. I’ve made many mistakes with these files. Mostly, the javascript required to generate the static pages for the route.

There is a good chance that a Google search might lead you on the right path. Thankfully, there are tutorials out there if you look for them. This is one reason why I’m documenting my process. So, I hope this helps you out!
