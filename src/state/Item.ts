import { DataTypes } from "sequelize";
import { Player } from "./Player";
import { TableDefinition } from "../types/TableDefinition";

export enum ItemType {
  POKE_BALL = "POKE_BALL",
  REPEL = "REPEL",
}

export interface Item {
  id: string;
  name: string;
  type: ItemType;
  player?: Player;
}

export const ItemsTableDef: TableDefinition = {
  name: "item",
  attributes: {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
};
