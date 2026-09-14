import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

/**
 * Uploads an ID proof file to Supabase Storage bucket ('id-proofs').
 * Returns the public URL of the uploaded file, or null if upload failed/offline.
 */
export async function uploadIdProof(file) {
  if (!supabase || !file) return null;

  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
    const filePath = `proofs/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('id-proofs')
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.warn('Storage upload error:', uploadError.message);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from('id-proofs')
      .getPublicUrl(filePath);

    return publicUrlData?.publicUrl || null;
  } catch (err) {
    console.error('Error uploading file:', err);
    return null;
  }
}

/**
 * Inserts registration record into 'registrations' Supabase table.
 */
export async function submitRegistration(registrationData) {
  if (!supabase) {
    // Local fallback when Supabase is not configured yet
    console.warn('Supabase client is not configured. Simulating registration locally.');
    return { data: [{ id: 'mock-id-' + Date.now(), ...registrationData }], error: null };
  }

  const { data, error } = await supabase
    .from('registrations')
    .insert([registrationData])
    .select();

  return { data, error };
}

