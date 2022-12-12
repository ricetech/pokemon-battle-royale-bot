// noinspection JSIgnoredPromiseFromCall

import { Model, ModelStatic, Sequelize } from "sequelize";
import { Team, TeamsTableDef } from "./Team";
import { Player, PlayersTableDef } from "./Player";
import { Pokemon, PokemonsTableDef } from "./Pokemon";
import { Item, ItemsTableDef } from "./Item";
import { ARGS_DEV } from "../util";

class Database {
  private static _instance: Database;
  sequelize: Sequelize;
  models: ModelStatic<Model<any, any>>[];

  private constructor() {
    this.sequelize = new Sequelize("database", "user", "password", {
      host: "localhost",
      dialect: "sqlite",
      logging: false,
      storage: ARGS_DEV
        ? "pokemon-battle-royale_TEST.sqlite"
        : "pokemon-battle-royale.sqlite",
    });
    Item.init(ItemsTableDef.attributes, { sequelize: this.sequelize });
    Player.init(PlayersTableDef.attributes, { sequelize: this.sequelize });
    Pokemon.init(PokemonsTableDef.attributes, { sequelize: this.sequelize });
    Team.init(TeamsTableDef.attributes, { sequelize: this.sequelize });

    this.models = [Item, Player, Pokemon, Team];
  }

  initializeTables() {
    for (const table of this.models) {
      table.sync();
    }

    // Relationships
    // 1 to many
    Team.hasMany(Player);
    Player.belongsTo(Team);

    Player.hasMany(Pokemon);
    Pokemon.belongsTo(Player);

    Player.hasMany(Item);
    Item.belongsTo(Player);

    // 1 to 1
    Pokemon.hasOne(Item);
    Item.belongsTo(Pokemon);
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}

export const db = Database.Instance;
