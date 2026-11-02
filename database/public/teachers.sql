create table teachers
(
    id       integer generated always as identity
        primary key,
    name     varchar(100) not null,
    house_id integer
        references houses
);

alter table teachers
    owner to postgres;

