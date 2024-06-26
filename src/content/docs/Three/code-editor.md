---
title: Using VS Code
description: VS Code is the suggested code editor for Astro.
---

A code editor is a personal choice. I have seen several developers make their top-tier lists. You will see things like Sublime Text, Notepad++, and an IDE from JetBrains.

It is okay if you have never heard of any of these. This is a short chapter. I am going to recommend that you use VS Code.  

Here is the reason why. 

## Trusted by Astro

They [tell you in the docs that VS Code is going to be your best option](https://docs.astro.build/en/editor-setup/). This is because of extensions that will help you with something called IntelliSense. This means that you will get help from the code editor. The best feature is that it will autocomplete as you are typing.


### Astro Files

This is important for editing your .astro files. One thing that it will do is import your components when using them in your file. If you change the name of a component it will also refactor your code and update all your imports. 


### Typescript

Content Collections use TypeScript in their configuration. This gives you Type Safety for your Markdown files front matter. Which is impressive. I don’t know of any other static site generators that do this. This check lets you know about errors and missing information. With a friendly explanation of what went wrong and what file. 


### Tailwind CSS

You may not be familiar with [Tailwind CSS](https://tailwindcss.com/). This tool uses utility classes. It creates a stylesheet that only includes the classes you have used. It makes it simple to do your design work as you are coding. Hovering over a class will show you the CSS that you are using. 

This is hard to explain briefly, I’ve [added an addendum](/addendum/tailwind/) on this.


## Helpful VS Code Extensions 



1. [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) - IntelliSense for .astro files
2. [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx) - IntelliSense for .mdx files
3. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Formats your code making it easier to read
4. [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - You’ll need this if you use Tailwind
5. [NPM IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) - Autocomplete when importing NPM packages