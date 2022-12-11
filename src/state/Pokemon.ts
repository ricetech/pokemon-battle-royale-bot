import { DataTypes } from "sequelize";
import { Player } from "./Player";
import { TableDefinition } from "../types/TableDefinition";

export interface Pokemon {
  id: string;
  name: string;
  type1: string;
  type2: string;
  level: number;
  hp: number;
  atk: number;
  canEvolveAtLvl: boolean;
  evolvesAtLvl?: number;
  canEvolveWithItem: boolean;
  evolvesWithItem?: string;
  evolution: number;
  legendary: boolean;
  player?: Player;
}

export const PokemonsTableDef: TableDefinition = {
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
    type1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type2: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.INTEGER,
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    atk: {
      type: DataTypes.INTEGER,
    },
    canEvolveAtLvl: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    evolvesAtLvl: {
      type: DataTypes.INTEGER,
    },
    canEvolveWithItem: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    evolvesWithItem: {
      type: DataTypes.STRING,
    },
    evolution: {
      type: DataTypes.INTEGER,
    },
    legendary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
};
