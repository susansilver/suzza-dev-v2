---
title: TypeScript
description: An explanation of TypeScript's use in Astro.
---

Astro was my first introduction to TypeScript. I don’t use JavaScript enough to need it. If you don’t know, TypeScript is a superset of JavaScript that offers type safety for your projects. Essentially helping you from implementing buggy code. If you get a TypeScript error, it will give you hints about what you did wrong and where your code is problematic.

Can you imagine what it is like to debug without a feature like that? In a large codebase, it would be dire. There are reasons why TypeScript is an industry-standard. TypeScript is what makes the developer experience with Astro so good.

This is because through content collections they have implemented type safety using Zod. This means that it will spot errors in the frontmatter of your Markdown files. This solves a big headache for publishers. You could have hundreds of Markdown files and not know there is an issue until your website fails to build. Then you would have to comb through all those files to find maybe a single typo. But, Astro with TypeScript will tell you exactly which file has the error. And your frontmatter doesn’t match the schema in your content collection config file.

Where you are going to use TypeScript the most is in your .astro files. When you are building components or layouts. I have this tag section in my file that generates the pages for each blog post.

```
<ul class="list-none flex flex-row flex-wrap">
    {
        entry.data.tags && entry.data.tags.length > 0 ? (
            entry.data.tags.map((tag) => (
                <li class="tag">
                    <a
                    class="hover:text-black-900 visited:text-black-900 text-black-900 underline"
                    href={`/tag/${tag}`}
                    title={`View posts tagged "${tag}"`}
                    >
                         #{tag.replace(/-/g, " ")}
                    </a>
                </li>
            ))
        ) : (
                <li class="tag">No tags found.</li>
            )
    }
</ul>

```

You see the following part at the beginning of the code, “entry.data.tags && entry.data.tags.length > 0 ?”.

This is important for TypeScript and without it, there would be an error. It is checking that there is a tag entry and that it isn’t empty. The ? is called a ternary operator. It creates a conditional where some code is executed if it is true and some other code is implemented if it is false. Everything before ":" is executed if this statement is true. That outputs all my tags. What is after ": " is executed If the statement is false. If there are no tags, then it prints “No tags found”.

If you don’t set things up this way you will get a TypeScript error that says “entry.data.tags is possibly undefined.” This is because your code needs to provide a condition in case the entry.data.tags comes back undefined. [Undefined is a falsy value](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) in JavaScript. Hence why you need a true and false condition.

It doesn’t matter if you are always going to have tags in your posts. You have to account for this type of error. “That is what I’m doing when I create that ternary operator. And, it is what you need to do anyway but TypeScript gives you that nudge to make sure you do it.

You might also get errors if you don’t create an interface in your .astro files between the code fences. This will give you red lines when you are using your props in your templates. But, you can make them go away. Here is mine for example in that same file as above.

```
interface Props {
 entry: CollectionEntry<"blog">;
}

```

I use CollectionEntry to get the properties I’ve typed when I configured the Blog collection. There is no reason to type out each one individually as you have already done this work. So, this is a little helper that Astro includes for you. But, yes, including this will make some of your red lines disappear. I will talk more about CollectionEntry later.
