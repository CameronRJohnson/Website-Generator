<script lang="ts">
  import { base } from '$app/paths'
  // Fetches the fruits name and description from +page.server.ts
  export let data: {
    topic: string;
    description: string;
    
  };


</script>

<main class="flex items-center justify-center min-h-screen bg-gray-900">
  <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
    <h2 class="text-2xl font-bold mb-6 text-center text-white">{data.topic}</h2>
    <p class="text-white whitespace-pre-wrap mb-4">{data.description}</p>
    <div class="flex justify-between">
      <a
        class="text-green-500 hover:text-green-700"
        href="/"
      >
        Home
      </a>
    </div>
  </div>
</main>