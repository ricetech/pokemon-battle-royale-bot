import { DataTypes, Model } from "sequelize";
import { TableDefinition } from "../types/TableDefinition";

export class Team extends Model {
  declare name: string;
  declare color: string;
}

export const TeamsTableDef: TableDefinition = {
  attributes: {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
};
