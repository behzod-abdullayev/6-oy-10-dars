import { Router, type RequestHandler } from "express";
import {
  addStudent,
  deleteStudent,
  getAllStudents,
  getOneStudent,
  leftStudent,
  statistics,
  UpdateStudent,
} from "../controller/student.controller.js";

const studentRouter: Router = Router();

studentRouter.get("/get_all_students", getAllStudents as RequestHandler);
studentRouter.get("/get_one_student/:id", getOneStudent as RequestHandler);
studentRouter.post("/add_student", addStudent as RequestHandler);
studentRouter.put("/update_student/:id", UpdateStudent as RequestHandler);
studentRouter.delete("/delete_student/:id", deleteStudent as RequestHandler);
studentRouter.put("/left_students/:id", leftStudent as RequestHandler);
studentRouter.get("/statistics", statistics as RequestHandler);

export default studentRouter;
