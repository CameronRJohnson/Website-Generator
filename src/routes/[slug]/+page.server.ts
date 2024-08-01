import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';
import type { TopicData } from '$lib/types';

export const load: PageServerLoad = async () => {
  try {
    const { data, error } = await supabase.from('Topics').select('Topic, Description');

    if (error || !data) {
      console.error('Error fetching data from Supabase:', error ? error.message : 'No data found');
      return {
        error: 'Not found'
      };
    }

    console.log('Data fetched successfully:', data);

    return {
      topics: data
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      status: 500,
      error: 'Internal Server Error'
    };
  }
};
