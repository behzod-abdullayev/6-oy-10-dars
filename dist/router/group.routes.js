import { Router } from "express";
import { addGroup, deleteGroup, getAllGroups, getOneGroup, UpdateGroup } from "../controller/group.controller.js";
const groupRouter = Router();
groupRouter.get("/get_all_groups", getAllGroups);
groupRouter.get("/get_one_group/:id", getOneGroup);
groupRouter.post("/add_group", addGroup);
groupRouter.put("/update_group/:id", UpdateGroup);
groupRouter.delete("/delete_group/:id", deleteGroup);
export default groupRouter;
//# sourceMappingURL=group.routes.js.map