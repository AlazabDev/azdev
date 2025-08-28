-- Fix critical security vulnerability: Restrict projects table access to prevent business data theft
-- Current policy allows anyone to view all projects including budgets, costs, and business strategies

-- Drop the dangerous public SELECT policy  
DROP POLICY IF EXISTS "Users can view all projects" ON public.projects;

-- Create secure policy: Only project managers can view their own projects
CREATE POLICY "Managers can view their own projects" 
ON public.projects 
FOR SELECT 
USING (auth.uid() = manager_id);

-- Optional: Add policy for admins to view all projects if needed for oversight
-- Uncomment if admin access is required for business operations
-- CREATE POLICY "Admins can view all projects" 
-- ON public.projects 
-- FOR SELECT 
-- USING (
--   EXISTS (
--     SELECT 1 FROM public.profiles 
--     WHERE id = auth.uid() 
--     AND role = 'admin'
--   )
-- );