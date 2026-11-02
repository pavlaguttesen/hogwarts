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

INSERT INTO students (name, year, house_id)
VALUES ('Harry Potter', 1, 1),
('Hermione Granger', 1, 1),
('Ron Weasley', 1, 1),
('Draco Malfoy', 1, 2),
('Luna Lovegood', 1, 3),
('Cedric Diggory', 3, 4);