
-- Fix search_path on touch function
create or replace function public.touch_updated_at()
returns trigger language plpgsql
set search_path = public
as $$ begin new.updated_at = now(); return new; end; $$;

-- Restrict has_role execution to authenticated users only
revoke execute on function public.has_role(uuid, app_role) from public, anon;
grant execute on function public.has_role(uuid, app_role) to authenticated;

-- Tighten storage bucket: drop broad public select, allow public read but no list
drop policy if exists "Public read cms-images" on storage.objects;
create policy "Public read cms-images files"
  on storage.objects for select
  using (bucket_id = 'cms-images' and (storage.foldername(name))[1] is not null);
