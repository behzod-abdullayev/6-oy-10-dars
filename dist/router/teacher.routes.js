import { Router } from "express";
import { addTeacher, deleteTeacher, getAllTeachers, getOneTeacher, UpdateTeacher } from "../controller/teacher.controller.js";
const teacherRouter = Router();
teacherRouter.get("/get_all_teachers", getAllTeachers);
teacherRouter.get("/get_one_teacher/:id", getOneTeacher);
teacherRouter.post("/add_teacher", addTeacher);
teacherRouter.put("/update_teacher/:id", UpdateTeacher);
teacherRouter.delete("/delete_teacher/:id", deleteTeacher);
export default teacherRouter;
//# sourceMappingURL=teacher.routes.js.map