import { Model, ModelAttributes, ModelOptions } from "sequelize";

export interface TableDefinition {
  name?: string;
  attributes: ModelAttributes<Model<any, any>>;
  options?: ModelOptions<Model<any, any>> | undefined;
}
