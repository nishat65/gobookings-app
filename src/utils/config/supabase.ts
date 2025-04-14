import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.REACT_APP_PROJECT_URL,
  import.meta.env.REACT_APP_PUBLIC_PROJECT_KEY
);
