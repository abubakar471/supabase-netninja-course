import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://lqorjefnwbjwycfvseft.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxb3JqZWZud2Jqd3ljZnZzZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5NzkzNDUsImV4cCI6MjAxNjU1NTM0NX0.VaWPTCzsKnCEPB_SHovQPFSEXtXEMR3iHYoe7gw2_TQ";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase