import * as coursesRepository from "../repositories/courses.repository.js";
import * as studentRepository from "../repositories/students.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export const getAllCoursesController = async (req, res) => {
  const allCourses = await coursesRepository.getAllCourses();

  if (allCourses.length === 0) {
    throw new HTTPError(404, "No courses found");
  }

  res.status(200).json(allCourses);
};

export const getCourseByIdController = async (req, res) => {
  const { id } = req.params;
  const course = await coursesRepository.getCourseById(id);

  if (!course) {
    throw new HTTPError(404, "Course not found");
  }

  res.status(200).json(course);
};

export const createCourseController = async (req, res) => {
  const { name, teacher_id } = req.body;
  const newCourse = await coursesRepository.createCourse(name, teacher_id);

  res.status(201).json(newCourse);
};

export const addStudentToCourseController = async (req, res) => {
  const { id } = req.params;
  const { student_id } = req.body;
  const existingStudent = await studentRepository.getStudentById(student_id);

  if (!existingStudent) {
    throw new HTTPError(404, "Student not found");
  }
  const existingCourse = await coursesRepository.getCourseById(id);

  if (!existingCourse) {
    throw new HTTPError(404, "Course not found");
  }

  const updatedCourseandStudent = await coursesRepository.addStudentToCourse(
    id,
    student_id
  );

  res.status(201).json(updatedCourseandStudent);
};

export const updateCourseController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const existingCourse = await coursesRepository.getCourseById(id);

  if (!existingCourse) {
    throw new HTTPError(404, "Course not found");
  }

  const updatedCourse = await coursesRepository.updateCourse(id, name);

  res.status(200).json(updatedCourse);
};

export const updateCourseTeacherController = async (req, res) => {
  const { id } = req.params;
  const { teacher_id } = req.body;
  const existingCourseTeacher = await coursesRepository.getCourseById(id);

  if (!existingCourseTeacher) {
    throw new HTTPError(404, "Course not found");
  }

  const updatedCourseTeacher = await coursesRepository.updateCourseTeacher(
    id,
    teacher_id
  );

  res.status(200).json(updatedCourseTeacher);
};

export const deleteCourseController = async (req, res) => {
  const { id } = req.params;
  const existingCourse = await coursesRepository.getCourseById(id);

  if (!existingCourse) {
    throw new HTTPError(404, "Course not found");
  }

  await coursesRepo.deleteCourse(id);
  res.status(204).send();
};

export const deleteStudentFromCourseController = async (req, res) => {
  const { id, student_id, course_id } = req.params;
  const existingCourseStudent = await coursesRepository.getCourseById(id);

  if (!existingCourseStudent) {
    throw new HTTPError(404, "Course not found");
  }

  await coursesRepo.deleteStudentFromCourse(course_id, student_id);
  res.status(204).send();
};
