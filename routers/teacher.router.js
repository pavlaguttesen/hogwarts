import express from "express";
import { getAllTeachersController, getTeacherByIdController } from "../controllers/teachers.controller.js";

const router = express.Router();

router.get("/", getAllTeachersController);
router.get("/:id", getTeacherByIdController);

export default router;