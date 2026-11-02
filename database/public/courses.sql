create table courses
(
    id         integer generated always as identity
        primary key,
    name       varchar(100) not null,
    teacher_id integer      not null
        references teachers
);

alter table courses
    owner to postgres;

INSERT INTO courses (name, teacher_id)
VALUES ('Potions', 2), 
('Transfiguration', 1),
('Charms', 3),
('Herbology', 4);
