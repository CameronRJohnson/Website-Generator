import { supabase } from '../../lib/supabaseClient';
import type { PageServerLoad } from './$types';
import type { TopicData } from '../../lib/types';

// Loads the inputed keyword into the page before it renders
export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;

  // Locates the fruit in the table
  const { data, error } = await supabase
    .from('Topics')
    .select('Topic, Description')
    .eq('Topic', slug)
    .single();

  if (error || !data) {
    throw new Error('Error fetching data from Supabase');
  }

  // Asigns the topic and description to TopicData
  return {
    topic: data.Topic,
    description: data.Description,
  };
};
