import { Dialect, Sequelize } from "sequelize";
import { TodoModel } from "../models/TodoModel";
import { dbconfig } from "../utils/db.config";

//-- Exporting conection instance
export const sequelize = new Sequelize(
    dbconfig.DATABASE,
    dbconfig.USER,
    dbconfig.PASSWORD, {
    host: dbconfig.DBHOST,
    dialect: dbconfig.DIALECT as Dialect
  });

  //-- Exporting model instance
export const TODO = TodoModel();