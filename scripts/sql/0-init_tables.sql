create table if not exists store_users(
  id serial primary key not null,
  fname char(30) not null,
  lname char(50) not null,
  balance real);

create table if not exists store_products(
  id serial primary key not null,
  name char(30) not null,
  description char(50),
  price real);

create table if not exists store_transactions(
  id serial primary key not null,
  transaction_time timestamp not null default now(),
  user_id int not null,
  product_id int,
  amount real not null);