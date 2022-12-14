import { DataTypes, Model } from "sequelize";
import { TableDefinition } from "../types/TableDefinition";

export class Team extends Model {
  declare id: string;
  declare name: string;
  declare color: string;
  declare roleId: string;
}

export const TeamsTableDef: TableDefinition = {
  attributes: {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
};
