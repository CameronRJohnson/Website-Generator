import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xfpdeagswtvotnlxdzju.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmcGRlYWdzd3R2b3RubHhkemp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxMTQxNzQsImV4cCI6MjAzNzY5MDE3NH0.MZ930ZGLJm2sFpQnHzc3PeeRTXQn3bOTuMWe5p6dKdw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
