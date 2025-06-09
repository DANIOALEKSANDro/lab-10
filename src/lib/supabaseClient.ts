import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xsuqfllofyszlateliyn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzdXFmbGxvZnlzemxhdGVsaXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NjM2NDUsImV4cCI6MjA2NDQzOTY0NX0.mhW8LCPrL6F_fCAbDl7gmjSMKm83tAsuHFD6p1fXauQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
