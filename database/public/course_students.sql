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

