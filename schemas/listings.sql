create table listings (
  id uuid primary key,
  user_id uuid references auth.users(id) on delete cascade,
  type text not null check (type in ('job', 'room', 'market')),
  title text not null,
  location text not null default '',
  price text not null default '',
  description text not null default '',
  posted_at text not null default 'Just now',
  image text,
  phone_number text,
  is_mine boolean default true,
  extra jsonb,
  created_at timestamptz default now()
);

alter table listings enable row level security;

create policy "Anyone can read listings"
  on listings for select
  using (true);

create policy "Authenticated users can insert listings"
  on listings for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update own listings"
  on listings for update
  using (auth.uid() = user_id);

create policy "Users can delete own listings"
  on listings for delete
  using (auth.uid() = user_id);
