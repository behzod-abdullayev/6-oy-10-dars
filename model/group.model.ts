import { DataTypes, Model } from "sequelize";
import sequelize from "../config/config.js";
import { groupValues } from "../enum/group.enum.js";
export class Group extends Model {
  title!: string;
  days!: string;
  time!: string;
  image_url!: string;
  added_by!: number;
  teacher_id!: number;
}

Group.init(
  {
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
    
  },
  {
    tableName: "groups",
    timestamps: true,
    sequelize,
  },
);
