create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  referral_source text,
  user_type text,
  created_at timestamptz not null default now(),
  ip_hash text,
  user_agent text
);

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;

-- Public inserts allowed via anon key. Reads are blocked.
-- Your server routes use the service role key and bypass RLS anyway.
create policy "anon can insert waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);
