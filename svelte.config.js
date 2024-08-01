import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    postcss: true
  }),
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),

    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    },
    
    prerender: {
      entries: ['*', '/apple', '/banana', '/cherry']  // Add all the possible routes here
    }

  }
};

export default config;
