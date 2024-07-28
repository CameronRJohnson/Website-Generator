<script>
    export let showPopup;
    export let closePopup;
  </script>
  
  {#if showPopup}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="relative bg-gray-800 text-white p-10 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 class="text-2xl font-bold mb-4">About</h2>
        <p>Welcome to my website generator demo, this site is designed to demonstrate seamless interaction with a database using SvelteKit and Supabase. This site showcases a simple interface for querying a database of topics and retrieving detailed descriptions. The descriptions were all made with ChatGPT in Microsoft Excel.</p>
        <button
          class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          on:click={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  {/if}