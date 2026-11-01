import express from "express";
import {getAllHousesController,getHouseByIdController} from "../controllers/houses.controller.js";

const router = express.Router();

router.get("/", getAllHousesController);
router.get("/:id", getHouseByIdController);

export default router;