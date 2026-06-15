-- Add explicit restrictive policies to leads: only service_role can read/update/delete
REVOKE SELECT, UPDATE, DELETE ON public.leads FROM anon, authenticated;

CREATE POLICY "Only service role can read leads"
ON public.leads FOR SELECT
TO authenticated
USING (false);

CREATE POLICY "Only service role can update leads"
ON public.leads FOR UPDATE
TO authenticated
USING (false) WITH CHECK (false);

CREATE POLICY "Only service role can delete leads"
ON public.leads FOR DELETE
TO authenticated
USING (false);