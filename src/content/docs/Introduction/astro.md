---
title: Introduction to Astro
description: The things you need to know to use Astro.
---

[Astro is a framework](https://astro.build/) that ticks all the marks for modern web development. It is a static site generator (SSG) that serves pages in HTML and CSS. It is perfect for blogs because it defaults to shipping zero JavaScript. This makes content-focused websites blazingly fast. However, if needed, you can still write and load JavaScript using any UI framework you like. Astro supports React, Vue, Svelte, and more. It also supports vanilla JavaScript in its .astro files. 


## Who Is This For

This is the guide for you if the opening paragraph didn’t make much sense. 

I am not a professional and this is not a guide for professionals. It will be too simple for them. This is a guide for people like me who enjoy building simple websites.

What I am saying is this. 

I was able from nearly zero knowledge to design and develop several Astro websites. This guide is the result of that experience. It would be cool if some other DIY learners were able to do the same. That is my motivation for writing this. 


## Disastrous Failings and Their Solutions 

Hey, are you still with me? The following guide goes into detail about my process.

 **By process**, *I mean making lots of mistakes*.
 
 I will go over them while explaining the solutions that I found.

Failure is not a four-letter. Embrace it. We learn so much from getting things wrong. The best way to learn front-end dev skills is by working on projects. 

Jessica Rose started the [bad website club](https://www.youtube.com/@BadWebsiteClub/) for this very reason. 

My goal is to give you insight into some problems that you may experience as you go along. Sometimes we think these mistakes are due to our lack of skill. Even professionals will get stuck. Most of my problems resolved themselves when I read the documentation.

_You can’t know everything._

If you get stuck, review the docs!

[https://docs.astro.build/en/getting-started/](https://docs.astro.build/en/getting-started/)


## Before We Begin

In this guide, I will highlight the choices that I made. Link to the relevant Astro documentation. Sharing any external resources that helped me along the way. 


### I assume the following 



1. You should have [some comfort using the command line](https://www.joshwcomeau.com/javascript/terminal-for-js-devs/). 
2. Your [code editor is VS Code](https://code.visualstudio.com/). 
3. You are [using NPM](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
4. You’ve [installed Node](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/) 

:::note
The instruction above will install nvm. For the latest stable release of node use this command:

```sh
nvm install --lts
```
You will need Node version 18.14.1 or higher to use Astro.
:::




5. That you [have a GitHub account](https://github.com/). 

Okay, [let’s get started](https://docs.astro.build/en/install/auto/). 