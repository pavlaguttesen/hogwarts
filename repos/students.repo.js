import { pool } from "../db.js";

export async function getAllStudents() {
    const result = await pool.query("SELECT * FROM students ORDER BY id");
    return result.rows;
}

export async function getStudentById(id) {
    const result = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
    return result.rows[0];
}

export async function createStudent(name, year, house_id){
    const result = await pool.query("INSERT INTO students (name, year, house_id) VALUES ($1, $2, $3) RETURNING *", [name, year, house_id]);
    return result.rows[0];
}

export async function updateStudent(id, name, year, house_id){
    const result = await pool.query("UPDATE students SET name = $2, year = $3, house_id = $4 WHERE id = $1 RETURNING *", [id, name, year, house_id]);
    return result.rows[0];
}

export async function deleteStudent(id){
    const result = await pool.query("DELETE FROM students WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
}