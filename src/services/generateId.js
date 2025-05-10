import { listTodos } from './localStorageService';

var id = 1;

export const generate = () => {

    let todos = listTodos();

    if (todos) {
        todos.forEach(e => {

            if (e.id > id) {
                id = e.id;
            }
        });
    }

    return id;
};