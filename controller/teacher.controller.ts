import type { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import type { CreateTeacherDto, UpdateTeachertDto } from "../dto/teacher.dto.js";
import { Teacher } from "../model/associate.js";

Teacher.sync({ force: false });

export const getAllTeachers = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const search = req.query.search ? String(req.query.search).trim() : "";

    let whereClause: any = {};

    if (search) {
      whereClause = {
        [Op.or]: [

          { full_name: { [Op.iLike]: `%${search}%` } },
          { phone_number: { [Op.iLike]: `%${search}%` } },
          { profession: { [Op.iLike]: `%${search}%` } },
        ],
      };
    }

    const { count, rows: teachers } = await Teacher.findAndCountAll({
      where: whereClause,
      offset,
      limit,
      raw: true,
      order: [['createdAt', 'ASC']]
    });

    const totalPage = Math.ceil(count / limit) || 0;

    return res.status(200).json({
      success: true,
      totalItems: count,
      totalPage,
      currentPage: page,
      prev: page > 1 ? { page: page - 1, limit } : null,
      next: page < totalPage ? { page: page + 1, limit } : null,
      teachers,
    });
    
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOneTeacher = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findByPk(Number(id as string));

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }
    res.status(200).json(teacher);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const addTeacher = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { full_name, phone_number, profession, image_url, added_by} = req.body as CreateTeacherDto;
    await Teacher.create({
      full_name,
      phone_number,
      profession,
      image_url,
      added_by
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

export const UpdateTeacher = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const { full_name, phone_number, profession,  image_url, added_by } =
      req.body as UpdateTeachertDto;
    const newId = Number(id as string);
    const foundedTeacher = await Teacher.findByPk(newId);

    if (!foundedTeacher) {
      return res.status(404).json({
        message: "staff not found",
      });
    }

    await Teacher.update(
      { full_name, phone_number, profession, image_url, added_by},
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

export const deleteTeacher = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const newId = Number(id as string);
    const foundedTeacher = await Teacher.findByPk(newId);

    if (!foundedTeacher) {
      return res.status(404).json({
        message: "staff not found",
      });
    }

    await Teacher.destroy({ where: { id: newId } });
    res.status(200).json({
      message: "deleted",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
