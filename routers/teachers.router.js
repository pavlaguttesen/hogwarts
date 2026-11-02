import express from "express";
import { getAllTeachersController, getTeacherByIdController, createTeacherController, updateTeacherController, deleteTeacherController } from "../controllers/teachers.controller.js";

const router = express.Router();

router.get("/", getAllTeachersController);
router.get("/:id", getTeacherByIdController);
router.post("/", createTeacherController);
router.put("/:id", updateTeacherController);
router.delete("/:id", deleteTeacherController);

export default router;