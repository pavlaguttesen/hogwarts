create table houses
(
    id      integer generated always as identity
        primary key,
    name    varchar(100) not null,
    colors  varchar(100) not null,
    founder varchar(100) not null
);

alter table houses
    owner to postgres;

