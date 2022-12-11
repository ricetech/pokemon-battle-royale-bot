import { DataTypes, Model } from "sequelize";
import { TableDefinition } from "../types/TableDefinition";

export enum ItemType {
  POKE_BALL = "POKE_BALL",
  REPEL = "REPEL",
}

export class Item extends Model {
  declare id: string;
  declare name: string;
  declare type: ItemType;
}

export const ItemsTableDef: TableDefinition = {
  name: "item",
  attributes: {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
