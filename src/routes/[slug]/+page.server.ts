import { supabase } from '../../supabaseClient';
import type { PageServerLoad } from './$types';
export const prerender = 'auto';

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  console.log('Fetching data for slug:', slug);

  try {
    const { data, error } = await supabase
      .from('Topics')
      .select('Topic, Description')
      .eq('Topic', slug)
      .single();

    if (error || !data) {
      console.error('Error fetching data from Supabase:', error ? error.message : 'No data found');
      return {
        error: 'Not found'
      };
    }

    console.log('Data fetched successfully:', data);

    return {
      topic: data.Topic,
      description: data.Description
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      status: 500,
      error: 'Internal Server Error'
    };
  }
};
