import { DataTypes, Model } from "sequelize";
import sequelize from "../config/config.js";
import { groupValues } from "../enum/group.enum.js";
export class Group extends Model {
    title;
    days;
    time;
    image_url;
    added_by;
    teacher_id;
}
Group.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    days: {
        type: DataTypes.ENUM(...Object.values(groupValues)),
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    added_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "staffs",
            key: "id"
        }
    },
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "teachers",
            key: "id"
        }
    },
}, {
    tableName: "groups",
    timestamps: true,
    sequelize,
});
//# sourceMappingURL=group.model.js.map