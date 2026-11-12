import * as studentsRepository from "../repositories/students.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export const getAllStudentsController = async (req, res) => {
  const getAllStudents = await studentsRepository.getAllStudents();

  if (getAllStudents.length === 0) {
    throw new HTTPError(404, "No students found");
  }

  res.status(200).json(getAllStudents);
};

export const getStudentByIdController = async (req, res) => {
  const { id } = req.params;
  const student = await studentsRepository.getStudentById(id);

  if (!student) {
    throw new HTTPError(404, "Student not found");
  }

  res.status(200).json(student);
};

export const createStudentController = async (req, res) => {
  const { name, year, house_id } = req.body;
  const newStudent = await studentsRepository.createStudent(
    name,
    year,
    house_id
  );

  if (!newStudent) {
    throw new HTTPError(404, "Student not found");
  }

  res.status(201).json(newStudent);
};

export const updateStudentController = async (req, res) => {
  const { id } = req.params;
  const { name, year, house_id } = req.body;
  const existingStudent = await studentsRepository.getStudentById(id);

  if (!existingStudent) {
    throw new HTTPError(404, "Student not found");
  }

  const updatedStudent = await studentsRepository.updateStudent(
    id,
    name,
    year,
    house_id
  );

  res.status(200).json(updatedStudent);
};

export const deleteStudentController = async (req, res) => {
  const { id } = req.params;
  const existingStudent = await studentsRepository.getStudentById(id);

  if (!existingStudent) {
    throw new HTTPError(404, "Student not found");
  }

  await teachersRepo.deleteStudent(id);
  res.status(204).send();
};
