---
title: Tailwind CSS
description: A background on learning CSS before using Tailwind CSS.
---

Before starting you must know CSS first. This is because [you need to know the properties](https://www.w3schools.com/cssref/index.php) and what they do. Tailwind CSS does not tell you this. Using it without knowing the basics is like deciphering a strange language.

Some great places teach you CSS skills. The first is Free Code Camp. They have [a full course](https://www.freecodecamp.org/learn/2022/responsive-web-design/) on it. [Brad Traversy has a video with the basics](https://www.youtube.com/watch?v=yfoY53QXEnI) if you prefer that. Style Stage will [show you the power of CSS](https://stylestage.dev). You can accomplish many feats once mastered.


## Understanding Tailwind CSS

[Tailwind CSS is about utility classes](https://tailwindcss.com/docs/utility-first). There is no need to use or define any styles. All those CSS properties are now a set of classes. It is easy to [view them in the docs](https://tailwindcss.com/docs/installation) if you want to know more about them. 

There is a specific reason why Tailwind CSS is set up this way. It has everything to do with building components in UI frameworks like React. They often[ use something called JSX](https://react.dev/learn/writing-markup-with-jsx). You use markup and JavaScript together with JSX syntax. 

The CSS for a project can get out of hand quickly when building many components. Maintaining a style sheet is difficult for a large project. The utility classes of Tailwind CSS take care of this. The stylesheet builds from the classes you use. You no longer need to worry about your styles globally. 

This makes developing components much faster. You don’t need to reference a stylesheet. You don’t need to use any style tags. You add your classes as you work. 


## How .astro Files Handle CSS and Javascript

You don’t need Tailwind CSS though. Astro makes it easy to design your components. It uses scoped styles. You simply need to [add the style](https://docs.astro.build/en/guides/styling/) and [script tags](https://docs.astro.build/en/guides/client-side-scripts/#using-script-in-astro) to them. Astro knows to bundle it all together. 

It is important to know that scoped styles are not global. This means that the CSS does not leak out. It won’t alter the CSS for other components or your overall design. The Astro docs show that in the [cascading order](https://docs.astro.build/en/guides/styling/#cascading-order) of the scoped styles. They take precedence over other styles of the same specificity.