import { Router, type RequestHandler } from "express";
import { addStaff, deleteStaff, getAllstaffs, getOneStaff, UpdateStaff } from "../controller/staff.controller.js";


const staffRouter: Router = Router();

staffRouter.get("/get_all_staffs", getAllstaffs as RequestHandler);
staffRouter.get("/get_one_staff/:id", getOneStaff as RequestHandler);
staffRouter.post("/add_staff", addStaff as RequestHandler);
staffRouter.put("/update_staff/:id", UpdateStaff as RequestHandler);
staffRouter.delete("/delete_staff/:id", deleteStaff as RequestHandler);

export default staffRouter;
