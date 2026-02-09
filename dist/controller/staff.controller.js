import { Op } from "sequelize";
import { Staff } from "../model/associate.js";
Staff.sync({ force: false });
export const getAllstaffs = async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const search = req.query.search ? String(req.query.search).trim() : "";
        let whereClause = {};
        if (search) {
            whereClause = {
                [Op.or]: [
                    { full_name: { [Op.iLike]: `%${search}%` } },
                    { phone_number: { [Op.iLike]: `%${search}%` } },
                    { profession: { [Op.iLike]: `%${search}%` } },
                ],
            };
        }
        const { count, rows: staffs } = await Staff.findAndCountAll({
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
            staffs,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const getOneStaff = async (req, res, next) => {
    try {
        const { id } = req.params;
        const staff = await Staff.findByPk(Number(id));
        if (!staff) {
            return res.status(404).json({
                message: "staff not found",
            });
        }
        res.status(200).json(staff);
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
export const addStaff = async (req, res, next) => {
    try {
        const { full_name, phone_number, profession, image_url } = req.body;
        await Staff.create({
            full_name,
            phone_number,
            profession,
            image_url,
        });
        res.status(201).json({
            message: "created",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
export const UpdateStaff = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { full_name, phone_number, profession, image_url, } = req.body;
        const newId = Number(id);
        const foundedStaff = await Staff.findByPk(newId);
        if (!foundedStaff) {
            return res.status(404).json({
                message: "staff not found",
            });
        }
        await Staff.update({ full_name, phone_number, profession, image_url }, { where: { id: newId } });
        res.status(200).json({
            message: "updated",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
export const deleteStaff = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newId = Number(id);
        const foundedStaff = await Staff.findByPk(newId);
        if (!foundedStaff) {
            return res.status(404).json({
                message: "staff not found",
            });
        }
        await Staff.destroy({ where: { id: newId } });
        res.status(200).json({
            message: "deleted",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
//# sourceMappingURL=staff.controller.js.map