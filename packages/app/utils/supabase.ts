import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";

import "react-native-url-polyfill/auto";

const supabaseUrl = "https://project.supabase.co";
const supabaseAnonKey = "your-anon-key";

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key),
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
