---
title: Adding Fonts
description: How to add custom fonts to your Astro website
---

There are ways to add custom fonts to your website. You might want one for your logo, headings, or to highlight text. I use fonts for my logo and my block-quotes. In this way, I can make both stand out and don't need to rely on graphics for fancy text!

There is an integration for Astro that makes this easier. It is called Astro Font.

## Using Astro Font

You will find the [instructions for Astro Font](https://www.launchfa.st/features/astro-font) on their website. The nice thing about it is that you can use Google Fonts or local fonts. All you have to do is to import add your code to the head tag. It will automatically add the @font-face declarations and optimize your fonts.

You have to use a CSS Selector to apply your fonts. So, you might have to create a class. This is how I applied it to my logo by using the class .logo. Though you can easily use a heading like H1 as well. Or using body to make it the font for your body text. Visit the website to see more examples.

By the way, You can download Google Fonts to use locally with the utility [Google Webfonts Helper](https://gwfh.mranftl.com/fonts). This is my preference and what I have used for my website.

Here is my setup with local fonts. If you use this method, you will have to add your fonts to a public folder so they will load.

```astro
<AstroFont
  config={[
    {
      name: "Ouroboros",
      src: [
        {
          weight: "400",
          style: "normal",
          path: "/fonts/Ouroboros-Regular.woff2",
        },
      ],
      preload: true,
      display: "swap",
      selector: "#LTUAE",
      fallback: "sans-serif",
    },
    {
      name: "Righteous",
      src: [
        {
          weight: "400",
          style: "normal",
          path: "/fonts/righteous-v13-latin-regular.woff2",
        },
      ],
      preload: true,
      display: "swap",
      selector: ".logo",
      fallback: "sans-serif",
    },
    {
      name: "Poiret",
      src: [
        {
          weight: "400",
          style: "normal",
          path: "/fonts/poiret-one-v16-latin-regular.woff2",
        },
      ],
      preload: true,
      display: "swap",
      selector: ".fancy-text",
      fallback: "sans-serif",
    },
  ]}
/>
```

This shortcut saves time but you can also do things manually. Here are the instructions to do things yourself if you wish. Could come in handy if Astro Fonts does not work for you.

## Manually Adding Custom Fonts

You will need to do a few things

1. If using local fonts add them to your public folder.
2. Add the @font-face declaration in your css
3. Link to your fonts in your head section
4. Preload your fonts to prevent the flash of unstyled text
5. Use font-family in your css to apply your font using selectors

### @font-face

This is what the @font-face declaration looks like. Add this to your CSS stylesheet.

```css
@font-face {
  font-family: "Poiret";
  src: url("/fonts/poiret-one-v16-latin-regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

### Adding Font to Head Section and Using Preload

This is what you will add to your head section to load your fonts. Adding preload while linking your fonts prevents that unstyled text from flashing. It tells the browser to prioritize downloading your fonts before other parts of the page. Preload is only used for resources that need to be loaded immediately.

```html
<link
  rel="preload"
  href="/fonts/poiret-one-v16-latin-regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

### Using Font-Family

To apply your new fonts, you have to use the css property font-family. It is fairly simple to use.

```css
.fancy-text {
  font-family: "Poiret", Arial, cursive;
}
```

When using font-family, I have to use the name that I gave my font in the @font-face declaration. It also needs to be in quotes.

## Adding Custom Fonts with Tailwind CSS

1. First you will need to use @font-face in your global.css stylesheet. Here is an example.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  @font-face {
    font-family: "Poiret";
    src: url("/fonts/poiret-one-v16-latin-regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
}
```

2. Next, you link your fonts to your head section as before.

```html
<link
  rel="preload"
  href="/fonts/poiret-one-v16-latin-regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

3. To apply your fonts, add the following to your Tailwind Config file. You do this [by using theme to declare your font-families](https://tailwindcss.com/docs/font-family#using-custom-values).

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ['"Poiret"', "Arial", "cursive"],
    },
  },
  plugins: [],
};
```

This gives us a new class to use, "font-display." This will apply the font-family defined in our theme as display. You can add additional font-families with their own name that will become the class name.
