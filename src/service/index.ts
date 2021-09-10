import { TODO } from "../DAO/DAO";
import { uuid } from 'uuidv4';

type TODODEF = {
    uuid: string,
    description: string,
    done : boolean,
    display : boolean
}

//-- Create TODO
export const create = async ({description, done, display}: TODODEF) => {
    try {
        const _todoPromise = await TODO.create({
            uuid: uuid(),
            description,
            done,
            display
        })
        return _todoPromise;
    } catch (error) {
        console.log(error);
    }
}

//-- Update TODO
export const update = async ({uuid,description, done, display}: TODODEF) => {
    try {
        const result = await TODO.update({
            description,
            done,
            display
        },{
            where: {
                uuid: uuid
            }
        });
        return result.length;
    } catch (error) {   
        console.log(error);
    }
}
//-- find All TODOS
export const findAll = async () => {
    try {
        const _todos = await TODO.findAll({
            where: {
                display: 1
            }
        });
        return _todos;
    } catch (error) {
        console.log(error);
    }
}