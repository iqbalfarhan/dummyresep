import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ljegtxhjdjfffajzxvxv.supabase.co/';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqZWd0eGhqZGpmZmZhanp4dnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNDkwOTgsImV4cCI6MjA0MTcyNTA5OH0.aTQYwE_L9fkUbD2bOsLngw20kd0hTPw-pid9fuu7c1E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
