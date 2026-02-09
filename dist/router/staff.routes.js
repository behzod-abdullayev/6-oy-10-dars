import { Router } from "express";
import { addStaff, deleteStaff, getAllstaffs, getOneStaff, UpdateStaff } from "../controller/staff.controller.js";
const staffRouter = Router();
staffRouter.get("/get_all_staffs", getAllstaffs);
staffRouter.get("/get_one_staff/:id", getOneStaff);
staffRouter.post("/add_staff", addStaff);
staffRouter.put("/update_staff/:id", UpdateStaff);
staffRouter.delete("/delete_staff/:id", deleteStaff);
export default staffRouter;
//# sourceMappingURL=staff.routes.js.map