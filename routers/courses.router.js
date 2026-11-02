import express from "express";
import { getAllCoursesController, getCourseByIdController, createCourseController, addStudentToCourseController, updateCourseController, updateCourseTeacherController,deleteCourseController, deleteStudentFromCourseController } from "../controllers/courses.controller.js";

const router = express.Router();

router.get("/", getAllCoursesController);
router.get("/:id", getCourseByIdController);
router.post("/", createCourseController);
router.post("/:id/students", addStudentToCourseController);
router.put("/:id", updateCourseController);
router.put("/:id/teacher", updateCourseTeacherController);
router.delete("/:id", deleteCourseController);
router.delete("/:id/students/:student_id", deleteStudentFromCourseController);

export default router;