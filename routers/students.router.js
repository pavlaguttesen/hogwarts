import express from "express";
import { getAllStudentsController, getStudentByIdController, createStudentController, updateStudentController, deleteStudentController } from "../controllers/students.controller.js";

const router = express.Router();

router.get("/", getAllStudentsController);
router.get("/:id", getStudentByIdController);
router.post("/", createStudentController);
router.put("/:id", updateStudentController);
router.delete("/:id", deleteStudentController);

export default router;