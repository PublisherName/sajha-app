create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  email text,
  phone_number text,
  push_notifications boolean default true,
  email_alerts boolean default false,
  created_at timestamptz default now()
);

alter table profiles enable row level security;

create policy "Users can read own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on profiles for insert
  to authenticated
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);
