create table students
(
    id       integer generated always as identity
        primary key,
    name     varchar(80) not null,
    year     integer     not null,
    house_id integer
        references houses
);

alter table students
    owner to postgres;

