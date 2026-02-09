import { Router, type RequestHandler } from "express";
import { addTeacher, deleteTeacher, getAllTeachers, getOneTeacher, UpdateTeacher } from "../controller/teacher.controller.js";


const teacherRouter: Router = Router();

teacherRouter.get("/get_all_teachers", getAllTeachers as RequestHandler);
teacherRouter.get("/get_one_teacher/:id", getOneTeacher as RequestHandler);
teacherRouter.post("/add_teacher", addTeacher as RequestHandler);
teacherRouter.put("/update_teacher/:id", UpdateTeacher as RequestHandler);
teacherRouter.delete("/delete_teacher/:id", deleteTeacher as RequestHandler);

export default teacherRouter;
