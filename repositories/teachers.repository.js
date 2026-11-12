import { pool } from "../db.js";

export async function getAllTeachers() {
    const result = await pool.query("SELECT * FROM teachers ORDER BY id");
    return result.rows;
}

export async function getTeacherById(id) {
    const result = await pool.query("SELECT * FROM teachers WHERE id = $1", [id]);
    return result.rows[0];
}

export async function createTeacher(name, house_id){
    const result = await pool.query("INSERT INTO teachers (name, house_id) VALUES ($1, $2) RETURNING *", [name, house_id]);
    return result.rows[0];
}

export async function updateTeacher(id, name, house_id){
    const result = await pool.query("UPDATE teachers SET name = $2, house_id = $3 WHERE id = $1 RETURNING *", [id, name, house_id]);
    return result.rows[0];
}

export async function deleteTeacher(id){
    const result = await pool.query("DELETE FROM teachers WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
}