import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://suzza.dev",
  integrations: [
    starlight({
      title: "Site with sitemap",
      favicon: "/favicon.ico",
      title: "Docs with Tailwind",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/tailwind.css",
      ],
      title: "Newbie-ish Guide to Astro",
      social: {
        github: "https://github.com/susansilver",
        mastodon: "https://mathstodon.xyz/@suzza",
      },
      sidebar: [
        {
          label: "Getting Sarted",
          collapsed: true,
          autogenerate: {
            directory: "Introduction",
          },
        },
        {
          label: "Chapter One",
          collapsed: true,
          autogenerate: {
            directory: "One",
          },
        },
        {
          label: "Chapter Two",
          collapsed: true,
          autogenerate: {
            directory: "Two",
          },
        },
        {
          label: "Chapter Three",
          collapsed: true,
          autogenerate: {
            directory: "Three",
          },
        },
        {
          label: "Chapter Four",
          collapsed: true,
          autogenerate: {
            directory: "Four",
          },
        },
        {
          label: "Chapter Five",
          collapsed: true,
          autogenerate: {
            directory: "Five",
          },
        },
        {
          label: "Chapter Six",
          collapsed: true,
          autogenerate: {
            directory: "Six",
          },
        },
        {
          label: "Chapter Seven",
          collapsed: true,
          autogenerate: {
            directory: "Seven",
          },
        },
        {
          label: "Chapter Eight",
          collapsed: true,
          autogenerate: {
            directory: "Eight",
          },
        },
        {
          label: "Chapter Nine",
          collapsed: true,
          autogenerate: {
            directory: "Nine",
          },
        },
        {
          label: "Chapter Ten",
          collapsed: true,
          autogenerate: {
            directory: "Ten",
          },
        },
        {
          label: "Chapter Eleven",
          collapsed: true,
          autogenerate: {
            directory: "Eleven",
          },
        },
        {
          label: "Things to Remember",
          collapsed: true,
          items: [
            {
              label: "Recommended Integrations",
              link: "/remember/integrations/",
            },
            {
              label: "Check for Updates",
              link: "/remember/updates/",
            },
            {
              label: "Show Your Support",
              link: "/remember/support/",
            },
            {
              label: "Final Thoughts on Astro",
              link: "/remember/final-thoughts/",
            },
            {
              label: "Thank You & Further Resources",
              link: "/remember/thank-you/",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Addendum",
          collapsed: true,
          autogenerate: {
            directory: "Addendum",
          },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
