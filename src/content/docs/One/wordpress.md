---
title: Why I Left WordPress
description: Security issues with WordPress are one reason to use a Static Site Generator.
---


WordPress is ubiquitous in blogging. They power [43% of all websites on the web](https://w3techs.com/technologies/details/cm-wordpress) (2023). No doubt, when you started writing, you read an article that told you it was the best choice.

 I don’t know if that is true any more.


### Pros of WordPress



* Most hosts offer a one-click installation 
* It has a mature ecosystem with free themes and plugins
* It is highly customizable


### Cons of WordPress



* It has a steep learning curve
* You have to keep up with security issues
* You need to employ techniques for performance


## My History

I used WordPress for a long time and encouraged other people to use it. It was easy to grab a theme and make it unique using CSS and JavaScript. I moved on to [building classic style themes from scratch](https://developer.wordpress.org/themes/classic-themes/). 

Then one day, I designed a new theme for [Beauty of Mathematics](https://beautyofmathematics.com/). 



* I used bold colors to keep the design minimal. 
* I wanted something super clean and optimized for written content. 
* I reduced the use of video and images.

 

I tested the performance of this theme on Google’s [PageSpeed Insights](https://pagespeed.web.dev/). After making improvements, I could only get into the mid 80 range. So close to the coveted green 90 score. 

I realized that I was not going to get there with WordPress. I wanted a change that used modern web development best practices. This led me to static site generators like [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/),  [Elventy](https://www.11ty.dev/), and [Astro](Astro.build). 


## Why You Should Leave

Bloggers get their websites up; they aren’t as aware of possible security breaches. There are several ways this happens.



1. You haven’t updated to the newest WordPress version
2. You haven't updated your installed plugins and themes 
3. You haven’t limited login attempts leaving you open to brute-force attacks
4. You are using a WordPress username that is admin or your name
5. You've reused your password, it is too simple, or easily guessed
6. You work with others and you haven’t limited their roles giving them too much access 
7. You use plugins and themes that are no longer maintained by the developer
8. You don’t keep up with the news about vulnerabilities in WordPress, plugins, or themes
9. Your server doesn’t have a firewall
10. You don’t use two-factor authentication

[This list is not exhaustive](https://blog.sucuri.net/2023/10/optimizing-wordpress-security-beyond-default-configurations.html) and is a lot to keep in mind if you only want to write. 

[Using a static site generator means that no one messes with your website](https://pavursec.com/blog/why-static/). All your content exists as HTML, CSS, and JavaScript. There is nothing to breach. 


### There are tradeoffs. 

You should be aware that [your host service is still vulnerable to a Denial of Service (DDoS) attack](https://pavursec.com/blog/static-security/). Netlify and Vercel offer a generous free tier of 100GB of bandwidth a month. Going over that level gets expensive. 

Remember to upgrade your tier if you ever expect to get a huge influx of traffic. It will be a lot cheaper. Though, [I was featured in Forbes](https://www.forbes.com/sites/hessiejones/2023/08/25/empowering-confidence-overcoming-math-anxiety-in-the-age-of-artificial-intelligence/?sh=2b206e27e2c2) and it barely moved the needle.


## Converting from WordPress to Astro

You have a choice to make when converting your blog or website to Astro from WordPress. If you [use Headless WordPress](https://docs.astro.build/en/guides/cms/wordpress/), you don’t have to change your [content management system](https://wordpress.com/go/tutorials/what-is-a-cms/#what-is-a-content-management-system) (CMS). This means that you expose an API endpoint where you fetch content. There are plugins designed for this purpose. 

I was able to get this method to work. Unfortunately, my fetched posts did not seem to have my custom HTML. I am sure this was a mistake on my part. While this is very doable, I went with the [method of converting my WordPress posts to Markdown](https://github.com/lonekorean/wordpress-export-to-markdown). 


## Using Front Matter CMS in VS Code

Truthfully, [working in Markdown isn’t difficult](https://www.markdownguide.org/cheat-sheet/).

I started using[ Front Matter CMS as a tool in VS Code](https://frontmatter.codes/) to manage it. This provides a CMS-like experience without leaving your code editor. It makes it super easy to use my components by automatically inserting them into files. It also provides a media library making it easy to see what images are in my assets folder. 

Another bonus to using Front Matter CMS is that you can set default content. I don’t have to fill in redundant information every time that I want to create a new post. It saves me so much time. 

For example,[ I am using MDX](https://docs.astro.build/en/guides/markdown-content/) which allows me to use components in my Markdown files. I have a set of common ones that I use for quotes and aligning images. I added the imports to a template. This way, when I create a new post, those statements are already there. Combine this with snippets and it is like using the WordPress block editor. 


## Working in Google Docs

For work, I am locked into Google. This is because I use a Chromebook. Yes, I do dev work from a Chromebook that cost me less than $300 (It’s gone up in price since then). It has [8GB of RAM](https://www.amazon.com/gp/product/B08ZLF99VD/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1) which I thought was impressive at that price point. I can do this [because it comes packaged with Linux](https://support.google.com/chromebook/answer/9145439?hl=en). 

There is an app in the Google Workspace Marketplace for Google Docs. It [will convert your formatted text into HTML or Markdown](https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607). HTML is useful if you are building pages for your websites that are .astro files. Converting to Markdown allows me to copy and paste that text into my CMS. 

I hope this helps you!
