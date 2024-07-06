import { Router } from "express";
import {
  createRoutine,
  deleteRoutineById,
  getAllRoutines,
  getRoutinesById,
  updateRoutineById,
} from "../controllers/fitness.controller.js";

export const routineRouter = Router();

routineRouter.route("/").post(createRoutine).get(getAllRoutines);

routineRouter
  .route("/:id")
  .get(getRoutinesById)
  .put(updateRoutineById)
  .delete(deleteRoutineById);
