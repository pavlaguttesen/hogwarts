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

INSERT INTO teachers (name, house_id)
VALUES ('Minerva McGonagall', 1),
('Severus Snape', 2),
('Filius Flitwick', 3),
('Pomona Sprout', 4);