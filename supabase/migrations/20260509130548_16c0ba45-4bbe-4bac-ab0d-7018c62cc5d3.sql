
-- Roles
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create policy "Users can view their own roles"
  on public.user_roles for select to authenticated
  using (auth.uid() = user_id or public.has_role(auth.uid(), 'admin'));

create policy "Admins manage roles"
  on public.user_roles for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- News
create table public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  date text not null,
  description text not null,
  image_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.news enable row level security;

create policy "Public can view news" on public.news for select using (true);
create policy "Admins insert news" on public.news for insert to authenticated
  with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins update news" on public.news for update to authenticated
  using (public.has_role(auth.uid(), 'admin'));
create policy "Admins delete news" on public.news for delete to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Staff
create table public.staff_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  image_url text,
  section text not null check (section in ('directorates', 'management')),
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.staff_members enable row level security;

create policy "Public can view staff" on public.staff_members for select using (true);
create policy "Admins insert staff" on public.staff_members for insert to authenticated
  with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins update staff" on public.staff_members for update to authenticated
  using (public.has_role(auth.uid(), 'admin'));
create policy "Admins delete staff" on public.staff_members for delete to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Statistics (key/value)
create table public.statistics (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  label text not null,
  value int not null default 0,
  sort_order int not null default 0,
  updated_at timestamptz not null default now()
);
alter table public.statistics enable row level security;

create policy "Public can view stats" on public.statistics for select using (true);
create policy "Admins insert stats" on public.statistics for insert to authenticated
  with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins update stats" on public.statistics for update to authenticated
  using (public.has_role(auth.uid(), 'admin'));
create policy "Admins delete stats" on public.statistics for delete to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- updated_at trigger
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

create trigger news_touch before update on public.news
  for each row execute function public.touch_updated_at();
create trigger staff_touch before update on public.staff_members
  for each row execute function public.touch_updated_at();
create trigger stats_touch before update on public.statistics
  for each row execute function public.touch_updated_at();

-- Storage bucket for CMS images
insert into storage.buckets (id, name, public) values ('cms-images', 'cms-images', true)
  on conflict (id) do nothing;

create policy "Public read cms-images"
  on storage.objects for select
  using (bucket_id = 'cms-images');

create policy "Admins upload cms-images"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'cms-images' and public.has_role(auth.uid(), 'admin'));

create policy "Admins update cms-images"
  on storage.objects for update to authenticated
  using (bucket_id = 'cms-images' and public.has_role(auth.uid(), 'admin'));

create policy "Admins delete cms-images"
  on storage.objects for delete to authenticated
  using (bucket_id = 'cms-images' and public.has_role(auth.uid(), 'admin'));
