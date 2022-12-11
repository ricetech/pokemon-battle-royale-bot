import { DataTypes } from "sequelize";
import { Snowflake } from "discord.js";
import { Pokemon } from "./Pokemon";
import { Team } from "./Team";
import { TableDefinition } from "../types/TableDefinition";

export interface Player {
  id: Snowflake;
  coins: number;
  pokemon?: Pokemon[];
  team?: Team;
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
