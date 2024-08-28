---
title: Related Posts Component
description: Adding related posts to keep reading clicking in Astro.
---

I still haven’t found a solution for automating related posts. The best tutorial that I’ve found is[ this one from Nicolas Mattia](https://www.nmattia.com/posts/2023-02-25-astro-suggestions/). It wasn’t working out for me no matter how I tried to augment it. I have an idea of how this should work. You need to match the tags on the post you are on. Then get all those posts in an array. Sort them and show the links to two or three posts. I’m not sure how to do this in JavaScript.

There is a resolution to this that works if you don’t mind the extra steps. I define the related posts in the frontmatter and have them displayed in my template. It is a little infuriating doing things this way. But, it gives you complete control of what appears on your blog. Which is a good trade-off. It is also easy to update those links when I want to change them.

This is my related articles component.

![Code for an Astro component showing related posts](/src/assets/related-articles-component.png "Related Articles Component")

I use JSX to check that the title and src for each article is in the frontmatter. It only shows the related articles if there are three blog posts. There is no point in showing the widget if I haven’t defined any related posts.

This is how it appears in my post layout.

![Code for placing a related articles component in a post layout](/src/assets/related-posts-template.png "Related Articles Post Template")

Basically, this code checks that the related posts' title and sources exist. If they aren’t defined then Astro needs to know what to do. Here it would output what is in the quotes. Which is nothing. This is a little redundant because we already have a check like this in our component. But, Typescript isn’t happy without this extra step.
