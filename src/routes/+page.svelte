<script lang="ts">
  import { base } from '$app/paths';
  import { supabase } from '../lib/supabaseClient';
  import { goto } from '$app/navigation';
  import Popup from '$lib/Popup.svelte';

  let topic = '';
  let help = 'Try entering "Apple" into the search bar to navigate to a different page.';
  let showPopup = false;

  // Search supabase for keyword
  async function searchDatabase() {
    // Checks to see if form is empty upon submission
    if (topic.trim() === '') {
      help = 'The form is empty. Please enter a fruit. (hint: enter "Apple")';
      return;
    }

    // Finds the desired keyword in supabase table
    const { data, error } = await supabase
      .from('Topics')
      .select('Description')
      .eq('Topic', topic);

    console.log('Search result:', { data, error });

    if (error) {
      console.error('Error fetching data:', error);
      help = `Error fetching data: ${error.message}`;
    } else if (data.length === 0) {
      help = 'We could not find this fruit. Try again.';
    } else {
      goto(`${base}/${topic}`);
    }
  }

  function openPopup() {
    showPopup = true;
  }

  function closePopup() {
    showPopup = false;
  }
</script>

<main class="flex items-center justify-center min-h-screen bg-gray-900">
  <form class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm relative">
    <h2 class="text-2xl font-bold mb-6 text-center text-white">Website Spliter Demo</h2>
    <div class="mb-4">
      <label class="block text-white text-sm font-bold mb-2" for="topic">
        Desired Fruit
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        id="topic"
        type="text"
        bind:value={topic}
        placeholder="Enter fruit"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        on:click={searchDatabase}
      >
        Search Database
      </button>
    </div>
    <div class="mt-4">
      <pre class="text-white whitespace-pre-wrap">{help}</pre>
    </div>
    <div class="absolute bottom-3 right-3 text-white">
      <button 
        type="button"
        class="text-white"
        on:click={openPopup}
      >
        About
      </button> 
      | 
      <a href="https://github.com/CameronRJohnson" target="_blank">Github</a>
    </div>
    <Popup {showPopup} closePopup={closePopup} />
  </form>
</main>
