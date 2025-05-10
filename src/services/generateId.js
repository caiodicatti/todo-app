import { listTodos } from './localStorageService';

var id = 1;

export const generateTodoId = () => {

    let todos = listTodos();

    if (todos && todos.length > 0) {

        todos.forEach(e => {
            if (e.id > id) {
                id = parseInt(e.id)
            }
        });

        id++;
    }

    return id;
};