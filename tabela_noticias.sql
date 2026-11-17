create table public.noticias (
  id bigint generated always as identity primary key,
  titulo text not null,
  descricao text not null,
  data_publicacao date not null
);

-- Permite que a chave anon use a API REST da tabela
alter table public.noticias enable row level security;

create policy "noticias_select" on public.noticias
  for select to anon using (true);

create policy "noticias_insert" on public.noticias
  for insert to anon with check (true);

create policy "noticias_update" on public.noticias
  for update to anon using (true) with check (true);

create policy "noticias_delete" on public.noticias
  for delete to anon using (true);
