import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hgektmwyzwvpwtnnhqqd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNjI1OTEwNSwiZXhwIjoxOTQxODM1MTA1fQ.XLoXScy4XDAhED8Bcmfg9OLOs4a2X5cHRt3-K4gPVIQ'
export const supabaseClient = createClient(supabaseUrl, supabaseKey)