import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    'process.env': {
      BASE_PATH: JSON.stringify(process.env.BASE_PATH),
      SUPABASE_URL: JSON.stringify(process.env.SUPABASE_URL),
      SUPABASE_ANON_KEY: JSON.stringify(process.env.SUPABASE_ANON_KEY),
    }
  }
});
