import { DataTypes, Model } from "sequelize";
import { TableDefinition } from "../types/TableDefinition";

export class Pokemon extends Model {
  declare id: string;
  declare name: string;
  declare type1: string;
  declare type2: string;
  declare level: number;
  declare hp: number;
  declare atk: number;
  declare canEvolveAtLvl: boolean;
  declare evolvesAtLvl?: number;
  declare canEvolveWithItem: boolean;
  declare evolvesWithItem?: string;
  declare evolution: number;
  declare legendary: boolean;
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
