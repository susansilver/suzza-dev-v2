---
title: Navbar Issues
description: It is easy to create a responsive navigation menu in Astro with Tailwind CSS.
---

There are times when I forget things. A navbar is not that difficult to code. Yet, I was so conditioned by the way that I make menus in WordPress. I will tell you all the things that I tried and what ended up working. 


## Response Nav

My first thought was to use a tool from my past called [Response Nav](https://github.com/arielsalminen/responsive-nav.js). It is a very tiny JavaScript that will toggle a menu. This worked well for my WordPress sites. So it was my first choice.

I ran into issues quickly. The biggest was that it did not work with my CSS. It kept breaking. I had to find another method. 


## Astro Navbar 

I found this by doing a search on GitHub for repos with Astro components. [Astro Navbar](https://github.com/surjithctly/astro-navbar) is a good solution and offers things like dropdown items for menus. 

This solution did not work for me. Again, it was breaking with my CSS. It was frustrating to get so close and have it not work. I was never able to figure out what was going on. 


## The Solution

These methods were foolish choices. It is not difficult to build a responsive menu. You need to use flexbox and a snippet of JavaScript to toggle the mobile menu from hidden to display. With Tailwind CSS, this is simple to do.  

CSS

```css
<nav>
<div class="flex justify-start">
		<div class="block lg:hidden">
			<button id="menuButton">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
			</button>
		</div>
		<ul id="menuList" class="hidden lg:flex lg:flex-row">
			<li></li>
		</ul>
	</div>
</nav>
```

JavaScript

```javascript
<script>
const menuButton = document.getElementById("menuButton");
const menuList = document.getElementById("menuList");

 menuButton.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
  });
</script>

```
You can use Tailwind CSS to adjust your colors, the gap between items, and add padding or margins.

## Using Daisy UI Components

There is a simpler method if you don’t feel comfortable making your own components. [Daisy UI ](https://daisyui.com/)works with Tailwind CSS. It is also free to use. 

There are two reasons why I like it.



1. It makes building a website from scratch much faster.
2. It is simple to [add light and dark themes](https://daisyui.com/docs/themes/). 

The drawback is that it might look like other websites built with Daisy UI. You should [customize](https://daisyui.com/docs/customize/) as much as possible.
