-- ============================================================
-- Supabase Setup Script for Odyssey Registration System
-- SECURE CONFIGURATION — Last updated: 2026-09-14
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

-- 3. RLS Policies for registrations table
-- Allow anonymous users to INSERT a registration (required for the public form)
CREATE POLICY "Allow public insert to registrations"
ON public.registrations
FOR INSERT
TO public
WITH CHECK (true);

-- SECURITY: No public SELECT policy.
-- Anonymous users CANNOT read, list, or export registration data.
-- Admins access data via Supabase Dashboard or service-role key (server-side only).

-- SECURITY: No public UPDATE or DELETE policies.
-- Anonymous users CANNOT modify or remove registrations.

-- 4. Create PRIVATE Storage Bucket for ID proof uploads
-- IMPORTANT: public = false — files are NOT publicly accessible via URL
INSERT INTO storage.buckets (id, name, public)
VALUES ('id-proofs', 'id-proofs', false)
ON CONFLICT (id) DO NOTHING;

-- 5. Storage Policies for 'id-proofs' bucket
-- Allow anonymous users to UPLOAD ID proofs (required for the registration form)
CREATE POLICY "Allow public upload to id-proofs"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'id-proofs');

-- SECURITY: No public SELECT/read policy on storage.objects for 'id-proofs'.
-- Anonymous users CANNOT list, download, or browse uploaded ID proofs.
-- Admins access files via the Supabase Dashboard Storage browser.
