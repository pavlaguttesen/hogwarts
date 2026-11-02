import { pool } from "../db.js";

export async function getAllCourses() {
    const result = await pool.query("SELECT * FROM courses ORDER BY id");
    return result.rows;
}

export async function getCourseById(id) {
    const result = await pool.query("SELECT * FROM courses WHERE id = $1", [id]);
    return result.rows[0];
}

export async function createCourse(name, teacher_id){
    const result = await pool.query("INSERT INTO courses (name, teacher_id) VALUES ($1, $2) RETURNING *", [name, teacher_id]);
    return result.rows[0];
}

export async function addStudentToCourse(course_id, student_id){
    const result = await pool.query("INSERT INTO course_students (course_id, student_id) VALUES ($1, $2) RETURNING *", [course_id, student_id]);
    return result.rows[0];
}

export async function updateCourse(id, name){
    const result = await pool.query("UPDATE courses SET name = $2 WHERE id = $1 RETURNING *", [id, name]);
    return result.rows[0];
}

export async function updateCourseTeacher(id, teacher_id){
    const result = await pool.query("UPDATE courses SET teacher_id = $2 WHERE id = $1 RETURNING *", [id, teacher_id]);
    return result.rows[0];
}

export async function deleteCourse(id){
    await pool.query("DELETE FROM course_students WHERE course_id = $1", [id]);
    const result = await pool.query("DELETE FROM courses WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
}

export async function deleteStudentFromCourse(course_id, student_id){
    const result = await pool.query("DELETE FROM course_students WHERE course_id = $1 AND student_id = $2 RETURNING *", [course_id, student_id]);
    return result.rows[0];
}