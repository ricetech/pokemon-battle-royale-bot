import { DataTypes } from "sequelize";
import { Player } from "./Player";
import { TableDefinition } from "../types/TableDefinition";

export interface Team {
  name: string;
  color: string;
  players?: Player[];
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
