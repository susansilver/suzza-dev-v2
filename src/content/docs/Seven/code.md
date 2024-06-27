---
title: Non-Updating Code
description: This is how you can fix code that happens when your Astr site is built.
---
There are issues that you can catch in your dev environment. Alas, there are errors that you will only catch if you try building your project. This happened with my Navbar.


## Victory is Not so Sweet 

I was able to create my own Navbar. Yet, it didn’t take when deployed to Netlify. This was frustrating! 

There wasn’t any info to go on that would show why this was happening. I double and triple-checked my settings. Made sure that the file was properly updated.


## Quick Thinking

Running a preview was the only thing I didn't do. It was then that I noticed the website was displaying the old Astro Navbar. Even though I had removed it. 

My thought was to run a test build and see if that would somehow fix things.

To do this use the command:

```sh
npm run build
```

When completed use this command:

```sh
npm run preview
```


 This worked. Building the website again caused no more problems. Everything updated to show the new Navbar that I had made. 


## Lesson Learned

The takeaway from this is to build your website and preview it before deploying. This is more helpful than you would think. Some errors will happen when building that didn’t occur when you were in dev mode. 
