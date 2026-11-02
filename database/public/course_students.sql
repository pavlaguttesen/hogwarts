create table course_students
(
    course_id  integer not null
        references courses,
    student_id integer not null
        references students,
    primary key (student_id, course_id)
);

alter table course_students
    owner to postgres;

INSERT INTO course_students (course_id, student_id)
VALUES (2, 1),
(3, 1),
(1, 1),
(2, 4),
(3, 4),
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(3, 3),
(4, 3),
(1, 5),
(4, 5),
(2, 5);
