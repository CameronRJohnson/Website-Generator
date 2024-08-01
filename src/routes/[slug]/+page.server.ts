// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';
import type { TopicData } from '$lib/types';

export const load: PageServerLoad = async () => {
  console.log('Fetching topics data from Supabase...');

  try {
    const { data, error } = await supabase.from('Topics').select('Topic, Description');

    if (error) {
      console.error('Error fetching data from Supabase:', error.message);
      return { topics: [] };
    }

    if (!data) {
      console.error('No data returned from Supabase');
      return { topics: [] };
    }

    console.log('Topics data fetched successfully:', data);
    return { topics: data as TopicData[] };
  } catch (err) {
    console.error('Unexpected error:', err);
    return { topics: [] };
  }
};
