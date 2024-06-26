---
title: Check for Updates 
description: Instructions for updating your npm packages.
---
You will have to update your website sometimes. This is easy to do. First, run the command **npm outdated**. This will show you all the updates available. 

```sh
 npm outdated
```

![Running the command npm outdated to find packages with updates](../../../assets/npm-outdated.png)


To update run the command **npm install** with the name of the package followed by @latest. For example, to update [Accessible Astro Components](https://github.com/markteekman/accessible-astro-components) run the command:

```sh
 npm install accessible-astro-components@latest
```


![Updating to the latest package](../../../assets/npm-install-latest.png)