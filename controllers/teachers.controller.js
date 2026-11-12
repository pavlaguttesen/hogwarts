import * as teachersRepository from "../repositories/teachers.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export const getAllTeachersController = async (req, res) => {
  const allTeachers = await teachersRepository.getAllTeachers();

  if (allTeachers.length === 0) {
    throw new HTTPError(404, "No teachers found");
  }

  res.status(200).json(allTeachers);
};

export const getTeacherByIdController = async (req, res) => {
  const { id } = req.params;
  const teacher = await teachersRepository.getTeacherById(id);

  if (!teacher) {
    throw new HTTPError(404, "Teacher not found");
  }

  res.status(200).json(teacher);
};

export const createTeacherController = async (req, res) => {
  const { name, house_id } = req.body;
  const newTeacher = await teachersRepository.createTeacher(name, house_id);

  if (!newTeacher) {
    throw new HTTPError(404, "Teacher not found");
  }

  res.status(201).json(newTeacher);
};

export const updateTeacherController = async (req, res) => {
  const { id } = req.params;
  const { name, house_id } = req.body;
  const existingTeacher = await teachersRepository.getTeacherById(id);

  if (!existingTeacher) {
    throw new HTTPError(404, "Teacher not found");
  }

  const updatedTeacher = await teachersRepository.updateTeacher(
    id,
    name,
    house_id
  );

  res.status(200).json(updatedTeacher);
};

export const deleteTeacherController = async (req, res) => {
  const { id } = req.params;
  const existingTeacher = await teachersRepository.getTeacherById(id);

  if (!existingTeacher) {
    throw new HTTPError(404, "Teacher not found");
  }

  await teachersRepo.existingTeacher(id);
  res.status(204).send();
};
