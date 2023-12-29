
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://fyzmzhlqlrtqkxxeepft.supabase.co", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5em16aGxxbHJ0cWt4eGVlcGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1NDA2ODAsImV4cCI6MjAxMDExNjY4MH0.M0nXpkaAtxOefJLMQjbNmnANoDzk7qViqv-cwWm3GrE');

export default supabase;