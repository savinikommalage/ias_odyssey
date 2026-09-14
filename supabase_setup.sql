-- ============================================================
-- Supabase Setup Script for Odyssey Registration System
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard)
-- ============================================================

-- 1. Create registrations table
CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    email TEXT NOT NULL,
    membership TEXT NOT NULL DEFAULT 'IEEE & IAS Member',
    id_proof_url TEXT,
    full_name TEXT,
    sliit_id TEXT,
    year_semester TEXT,
    faculty TEXT,
    contact_no TEXT,
    is_ieee_member BOOLEAN DEFAULT FALSE,
    ieee_id TEXT,
    food_preference TEXT DEFAULT 'Non-Veg'
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS policies for registrations table
-- Allow anyone (anonymous users) to insert a registration
CREATE POLICY "Allow public insert to registrations" 
ON public.registrations 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Allow public to select registrations (optional, restrict if needed)
CREATE POLICY "Allow public select registrations" 
ON public.registrations 
FOR SELECT 
TO public 
USING (true);

-- 4. Create Storage Bucket for ID proof uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES ('id-proofs', 'id-proofs', true)
ON CONFLICT (id) DO NOTHING;

-- 5. Storage Policies for 'id-proofs' bucket
CREATE POLICY "Public Read Access for ID Proofs" 
ON storage.objects 
FOR SELECT 
TO public 
USING (bucket_id = 'id-proofs');

CREATE POLICY "Public Upload Access for ID Proofs" 
ON storage.objects 
FOR INSERT 
TO public 
WITH CHECK (bucket_id = 'id-proofs');
