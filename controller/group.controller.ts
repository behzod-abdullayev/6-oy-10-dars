import type { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import type { CreateGroupDto, UpdateGroupDto } from "../dto/group.dto.js";
import { Group } from "../model/associate.js";

Group.sync({ force: false });

export const getAllGroups = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const search = req.query.search ? String(req.query.search).trim() : "";

    let whereClause: any = {};

    if (search) {
      whereClause = {
        [Op.or]: [

          { title: { [Op.iLike]: `%${search}%` } },
          { days: { [Op.iLike]: `%${search}%` } },

        ],
      };
    }

    const { count, rows: groups } = await Group.findAndCountAll({

      offset,
      limit,
      raw: true,
    });

    const totalPage = Math.ceil(count / limit) || 0;

    return res.status(200).json({
      success: true,
      totalItems: count,
      totalPage,
      currentPage: page,
      prev: page > 1 ? { page: page - 1, limit } : null,
      next: page < totalPage ? { page: page + 1, limit } : null,
      groups,
    });
    
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOneGroup = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const group = await Group.findByPk(Number(id as string));

    if (!group) {
      return res.status(404).json({
        message: "group not found",
      });
    }
    res.status(200).json(group);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const addGroup = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { title, days, time, added_by, teacher_id} = req.body as CreateGroupDto;
    await Group.create({
      title,
      days,
      time,
      added_by,
      teacher_id
      
    });
    res.status(201).json({
      message: "created",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const UpdateGroup = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const { title, days, time, added_by, teacher_id } =
      req.body as UpdateGroupDto;
    const newId = Number(id as string);
    const foundedGroup = await Group.findByPk(newId);

    if (!foundedGroup) {
      return res.status(404).json({
        message: "group not found",
      });
    }

    await Group.update(
      { title, days, time, added_by, teacher_id},
      { where: { id: newId } },
    );
    res.status(200).json({
      message: "updated",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteGroup = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const newId = Number(id as string);
    const foundedGroup = await Group.findByPk(newId);

    if (!foundedGroup) {
      return res.status(404).json({
        message: "group not found",
      });
    }

    await Group.destroy({ where: { id: newId } });
    res.status(200).json({
      message: "deleted",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
