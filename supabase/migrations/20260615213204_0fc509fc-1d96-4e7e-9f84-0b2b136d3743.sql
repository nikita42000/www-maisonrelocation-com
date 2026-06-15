
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  move_date DATE,
  origin TEXT,
  destination TEXT,
  message TEXT,
  source TEXT NOT NULL DEFAULT 'quote_form',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND (phone IS NULL OR length(phone) <= 40)
    AND (origin IS NULL OR length(origin) <= 300)
    AND (destination IS NULL OR length(destination) <= 300)
    AND (message IS NULL OR length(message) <= 5000)
  );
