// noinspection JSIgnoredPromiseFromCall

import { Model, ModelStatic, Sequelize } from "sequelize";
import { TeamsTableDef } from "./Team";
import { PlayersTableDef } from "./Player";
import { PokemonsTableDef } from "./Pokemon";
import { ItemsTableDef } from "./Item";

class Database {
  private static _instance: Database;
  sequelize: Sequelize;
  items: ModelStatic<Model<any, any>>;
  players: ModelStatic<Model<any, any>>;
  // I KNOW THIS ISN'T GRAMMATICALLY CORRECT, DKM
  pokemons: ModelStatic<Model<any, any>>;
  teams: ModelStatic<Model<any, any>>;
  tables: ModelStatic<Model<any, any>>[];

  private constructor() {
    this.sequelize = new Sequelize("database", "user", "password", {
      host: "localhost",
      dialect: "sqlite",
      logging: false,
      storage: "pokemon-battle-royale.sqlite",
    });
    this.items = this.sequelize.define("item", ItemsTableDef.attributes);
    this.players = this.sequelize.define("player", PlayersTableDef.attributes);
    this.pokemons = this.sequelize.define(
      "pokemon",
      PokemonsTableDef.attributes
    );
    this.teams = this.sequelize.define("teams", TeamsTableDef.attributes);

    this.tables = [this.items, this.players, this.pokemons, this.teams];
  }

  initializeTables() {
    for (const table of this.tables) {
      table.sync();
    }

    // Relationships
    // 1 to many
    this.teams.hasMany(this.players);
    this.players.belongsTo(this.teams);

    this.players.hasMany(this.pokemons);
    this.pokemons.belongsTo(this.players);

    this.players.hasMany(this.items);
    this.items.belongsTo(this.players);

    // 1 to 1
    this.pokemons.hasOne(this.items);
    this.items.belongsTo(this.pokemons);
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}

export const db = Database.Instance;
