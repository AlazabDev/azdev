-- Fix critical security vulnerability: Restrict profiles table SELECT access
-- Current policy allows anyone to view all profiles including emails and phone numbers

-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Create secure policy: Users can only view their own profile
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = id);

-- Optional: Add policy for admins to view other profiles if needed
-- Uncomment below if admin access to other profiles is required
-- CREATE POLICY "Admins can view all profiles" 
-- ON public.profiles 
-- FOR SELECT 
-- USING (
--   EXISTS (
--     SELECT 1 FROM public.profiles 
--     WHERE id = auth.uid() 
--     AND role = 'admin'
--   )
-- );