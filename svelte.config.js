import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.BASE_PATH;

const config = {
  preprocess: sveltePreprocess({
    postcss: true
  }),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    paths: {
      base: isGitHubPages ? '/Website-Generator' : '',
    }
  }
};

export default config;
