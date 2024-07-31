import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    sveltePreprocess({
      postcss: true
    }),
    vitePreprocess()
  ],
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'development' ? '' : process.env.BASE_PATH || ''
    },
    prerender: {
      entries: []
    }
  }
};

export default config;
