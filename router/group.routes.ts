import { Router, type RequestHandler } from "express";
import { addGroup, deleteGroup, getAllGroups, getOneGroup, UpdateGroup } from "../controller/group.controller.js";


const groupRouter: Router = Router();

groupRouter.get("/get_all_groups", getAllGroups as RequestHandler);
groupRouter.get("/get_one_group/:id", getOneGroup as RequestHandler);
groupRouter.post("/add_group", addGroup as RequestHandler);
groupRouter.put("/update_group/:id", UpdateGroup as RequestHandler);
groupRouter.delete("/delete_group/:id", deleteGroup as RequestHandler);

export default groupRouter;
