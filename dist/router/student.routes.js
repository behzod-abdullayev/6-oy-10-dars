import { Router } from "express";
import { addStudent, deleteStudent, getAllStudents, getOneStudent, leftStudent, statistics, UpdateStudent, } from "../controller/student.controller.js";
const studentRouter = Router();
studentRouter.get("/get_all_students", getAllStudents);
studentRouter.get("/get_one_student/:id", getOneStudent);
studentRouter.post("/add_student", addStudent);
studentRouter.put("/update_student/:id", UpdateStudent);
studentRouter.delete("/delete_student/:id", deleteStudent);
studentRouter.put("/left_students/:id", leftStudent);
studentRouter.get("/statistics", statistics);
export default studentRouter;
//# sourceMappingURL=student.routes.js.map