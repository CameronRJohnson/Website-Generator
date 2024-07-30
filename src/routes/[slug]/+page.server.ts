import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  console.log('Fetching data for slug:', slug);

  try {
    const { data, error } = await supabase
      .from('Topics')
      .select('Topic, Description')
      .eq('Topic', slug)
      .single();

    if (error) {
      console.error('Error fetching data from Supabase:', error.message);
      return {
        status: 404,
        error: new Error('Not found')
      };
    }

    if (!data) {
      console.error('No data found');
      return {
        status: 404,
        error: new Error('Not found')
      };
    }

    console.log('Data fetched successfully:', data);

    return {
      status: 200,
      props: {
        topic: data.Topic,
        description: data.Description
      }
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      status: 500,
      error: new Error('Internal Server Error')
    };
  }
};
