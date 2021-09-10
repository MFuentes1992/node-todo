import { create, update, findAll } from './../service/index';
export default class Controller {
    static async AddTodo(req: any, res: any) {
        const todo = await create(req.body);
        console.log(todo);
        res.json({status: "ToDo created", code: "200", uuid: todo?.getDataValue('uuid')});
    }

    static async UpdateTodo(req: any, res: any){
        const updated = await update(req.body);
        console.log(updated);
        res.json({status: "ToDo updated", code: "200", records: updated});
    }

    static async GetTodos(req: any, res: any){
        const todos = await findAll();
        console.log(todos);
        res.json(todos);
    }
}