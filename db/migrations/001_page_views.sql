create table if not exists public.page_views (
  visited_on date not null default current_date,
  visitor_hash text not null,
  created_at timestamptz not null default now(),
  primary key (visited_on, visitor_hash)
);

alter table public.page_views enable row level security;

create or replace function public.daily_views(days integer)
returns table (day date, views bigint)
language sql
stable
as $$
  select d::date as day, count(p.visitor_hash) as views
  from generate_series(current_date - (days - 1), current_date, interval '1 day') as d
  left join public.page_views p on p.visited_on = d::date
  group by d
  order by d;
$$;
