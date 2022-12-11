import { DataTypes, Model } from "sequelize";
import { Snowflake } from "discord.js";
import { TableDefinition } from "../types/TableDefinition";

export class Player extends Model {
  declare id: Snowflake;
  declare coins: number;
}

export const PlayersTableDef: TableDefinition = {
  attributes: {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    coins: {
      type: DataTypes.INTEGER,
    },
  },
};
