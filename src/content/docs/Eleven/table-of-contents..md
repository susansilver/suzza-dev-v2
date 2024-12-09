---
title: Table of Contents
description: How to create an automated table of contents in Astro.
---

I’ve tried multiple tutorials to create an automated table of contents. Astro already has the tools that you need for this. But, there were many approaches out there. None of which worked for me.

So, I created a table of contents component that I manually updated. That meant creating the anchor links in my content too. This took a lot of time and was a pain. I kept searching looking for something that would make this work for me.

I will still do some Google searches to find new Astro tutorials. There are things that I wish to put in place but don’t know how to do. A lot of what is out there is also written for professional devs. I don’t always understand them well enough to use them. Fortunately, I stumbled on the best implementation of an automated table of contents.

[Create Table of contents in Astro and sectionize the Markdown content](https://medium.com/@rezahedi/how-to-build-table-of-contents-in-astro-and-sectionize-the-markdown-content-78bee84e6a7f) by Reza Zahedi

Zahedi makes it easy to understand how to build a table of contents component. I had no trouble working with the code or customizing it. It is the most straightforward that I’ve found. It doesn’t need to install any dependencies. It works with the functions already built into Astro.

As a bonus, they also share how to create JavaScript for an observer. You can style the link in your table of contents when you scroll to a section divided by a header. This is a neat effect and helps people track their place in your articles. You can see it in[ practice in this tutorial from Kevin Drum](https://kld.dev/building-table-of-contents/). This is another way that you can automate creating a table of contents.

Check out this component if you've updated to Astro 5.0 and your table of contents has stopped working.
[Astro Table Of Contents Component + Sample Usage by Maciej Pędzich](https://gist.github.com/maciejpedzich/000da5c6b3a91290d49a91c9fe940ca3)

You will have to change the way that you call render for Astro 5.0.

Here is my code where I implement this Table of Contents component.

```
---
import {
  render,
  getCollection,
  type CollectionEntry,
} from "astro:content";

import TableOfContents from "../components/TableOfContents.astro";

export async function getStaticPaths() {
  const blogEntries = await getCollection("blog");

  return blogEntries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}


interface Props {
  entry: CollectionEntry<"blog">;
}


const { entry } = Astro.props;
const { Content, headings } = await render(entry);
---
```

You will see that render is now included in your imports. And that you call it with "await render(entry)". You can see the [full details on render](https://docs.astro.build/en/guides/content-collections/#rendering-body-content) in the Astro docs.
