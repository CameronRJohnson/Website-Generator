<script lang="ts">
  import { base } from '$app/paths';
  import type { TopicData } from '$lib/types';
  import Popup from '$lib/Popup.svelte';

  export let data: {
    topics: TopicData[];
  };

  let topic = '';
  let help = 'Try entering a topic into the search bar to navigate.';
  let filteredTopics: TopicData[] = [];
  let showPopup = false;

  function searchTopics() {
    if (topic.trim() === '') {
      help = 'The form is empty. Please enter a topic.';
      filteredTopics = [];
      return;
    }

    filteredTopics = data.topics.filter(t => t.Topic.toLowerCase().includes(topic.toLowerCase()));

    if (filteredTopics.length === 0) {
      help = 'We could not find this topic. Try again.';
    } else {
      help = '';
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
  <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm relative">
    <h2 class="text-2xl font-bold mb-6 text-center text-white">Website Spliter Demo</h2>
    <div class="mb-4">
      <label class="block text-white text-sm font-bold mb-2" for="topic">
        Desired Topic
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        id="topic"
        type="text"
        bind:value={topic}
        placeholder="Enter topic"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        on:click={searchTopics}
      >
        Search Topics
      </button>
    </div>
    <div class="mt-4">
      {#if help}
        <pre class="text-white whitespace-pre-wrap">{help}</pre>
      {/if}
      {#if filteredTopics.length > 0}
        <ul class="text-white">
          {#each filteredTopics as topic}
            <li>
              <a class="text-green-500 hover:text-green-700" href={`${base}/${topic.Topic}`}>
                {topic.Topic}
              </a>
            </li>
          {/each}
        </ul>
      {/if}
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
      <a href="https://github.com/CameronRJohnson" target="_blank">GitHub</a>
    </div>
    <Popup {showPopup} closePopup={closePopup} />
  </div>
</main>
