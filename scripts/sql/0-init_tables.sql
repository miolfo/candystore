create table if not exists store_users(
  id serial primary key not null,
  fname char(30) not null,
  lname char(50) not null,
  balance real);

create table if not exists store_products(
  id serial primary key not null,
  name varchar(30) not null,
  description varchar(50),
  price real);

create table if not exists store_transactions(
  id serial primary key not null,
  transaction_time timestamp not null default now(),
  user_id int not null,
  product_id int,
  amount real not null);

create table if not exists store_payment_options(
  id serial primary key not null,
  u_id int references store_users(id),
  payment_option varchar(200),
  description varchar(200));