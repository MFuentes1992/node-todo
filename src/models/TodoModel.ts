import { DataTypes } from "sequelize"
import { sequelize } from "../DAO/DAO"

export const TodoModel = () => {
    const todo = sequelize.define('todo', {
        uuid: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        description: DataTypes.STRING,
        done: DataTypes.BOOLEAN,
        display: DataTypes.BOOLEAN
    })
    return todo;
}