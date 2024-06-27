---
title: Works in Progress
description: Astro components that I want to add to my personal website.
---
There are some components that I am still working on. I'll update this document when finished. I thought it worthwhile to post them here for people more clever than me. If you find a solution, please let me know 


## Table of Contents

I found [a tutorial from Kevin Drum](https://kld.dev/building-table-of-contents/) that I liked. It was another element that worked and then broke. There didn’t seem to be a way for me to fix it. So, I moved on. 

The [next tutorial was from DEV ](https://dev.to/dailydevtips1/adding-a-toc-in-astro-4keh)by Chris Bongers. It was easy enough to add all the packages required. I couldn’t get it to output the table of contents. I’ve also failed this [tutorial from Timur Badretdinov](https://destiner.io/blog/post/using-markdown-plugins-in-astro).

This is what I learned so far. Astro provides a way to work with the content in your Markdown files. It uses [remark](https://github.com/remarkjs/remark); [@astrojs/remark is included](https://docs.astro.build/en/guides/markdown-content/#configuring-markdown-and-mdx). There is a [remark plugin for generating a table of contents](https://github.com/remarkjs/remark-toc). I still need to wrap my head around this. 

Currently, I use a table of contents component where I add the headings manually. It isn’t fun. It takes time. On longer posts, it is an ordeal. Any help with automating this is welcome. 


## Related Posts

Getting a feature on Forbes is exciting. I knew that my traffic would go up. I wanted to add a related post component to draw people deeper into the blog. 

I have this working but not in the way that I want. It shows three random posts at the bottom of each article. The issue is that I could not figure out how to get it to only show posts from the same category as the article. Or how to remove the current article from showing.

Recently, I found this article from Awesome Astro. It is a[ tutorial on suggested posts from Nicolas Mattia](https://www.nmattia.com/posts/2023-02-25-astro-suggestions/). The solution is to exchange my categories for the tags in the example. I haven’t implemented it yet.