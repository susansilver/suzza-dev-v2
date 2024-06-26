import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://suzza.dev',
  integrations: [starlight({
    title: 'Site with sitemap',
    favicon: '/favicon.ico',
    title: 'Docs with Tailwind',
    customCss: [
    // Path to your Tailwind base styles:
    './src/styles/tailwind.css'],
    title: 'Newbie-ish Guide to Astro',
    social: {
      github: 'https://github.com/susansilver',
      mastodon: 'https://mathstodon.xyz/@suzza'
    },
    sidebar: [{
      label: 'Getting Sarted',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Introduction to Astro',
        link: '/introduction/astro/'
      }]
    }, {
      label: 'Chapter One',
      autogenerate: {
        directory: 'One'
      }
    }, {
      label: 'Chapter Two',
      autogenerate: {
        directory: 'Two'
      }
    }, {
      label: 'Chapter Three',
      autogenerate: {
        directory: 'Three'
      }
    }, {
      label: 'Chapter Four',
      autogenerate: {
        directory: 'Four'
      }
    }, {
      label: 'Chapter Five',
      autogenerate: {
        directory: 'Five'
      }
    }, {
      label: 'Chapter Six',
      autogenerate: {
        directory: 'Six'
      }
    }, {
      label: 'Chapter Seven',
      autogenerate: {
        directory: 'Seven'
      }
    }, {
      label: 'Chapter Eight',
      autogenerate: {
        directory: 'Eight'
      }
    }, {
      label: 'Chapter Nine',
      autogenerate: {
        directory: 'Nine'
      }
    }, {
      label: 'Chapter Ten',
      autogenerate: {
        directory: 'Ten'
      }
    }, {
      label: 'Things to Remember',
      items: [{
        label: 'Recommended Integrations',
        link: '/remember/integrations/'
      }, {
        label: 'Check for Updates',
        link: '/remember/updates/'
      }, {
        label: 'Show Your Support',
        link: '/remember/support/'
      }, {
        label: 'Final Thoughts on Astro',
        link: '/remember/final-thoughts/'
      }, {
        label: 'Thank You & Further Resources',
        link: '/remember/thank-you/'
      }
      // A nested group of links.
      ]
    }, {
      label: 'Addendum',
      autogenerate: {
        directory: 'Addendum'
      }
    }]
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })]
});