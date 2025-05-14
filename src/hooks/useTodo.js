import { useState, useEffect } from 'react';
import { getTodo, saveTodo, listTodos, deleteTodo } from '../services/localStorageService';
import { generateTodoId } from '../services/generateId';

export const useTodo = (todoId) => {

    todoId = todoId ?? 0;

    const [todos, setTodos] = useState({});

    useEffect(() => {
        const stored = getTodo(todoId);
        if (stored) {
            setTodos(stored)
        };
    }, [todoId]);

    /*
    const updatetodos = (newtodos) => {
        setTodos(newtodos);
        var id = todoId ?? generate();
        saveTodo(id, newtodos);
    };
    */

    const saveNewTodo = (todoName) => {
        const id = generateTodoId();

        const newTodo = {
            id: id,
            name: todoName,
            tasks: []
        };

        saveTodo(id, newTodo);

        return id;
    };

    const saveOnly = (data) => {
        const id = todoId ?? generateTodoId();
        const dataSave = data ?? todos
        saveTodo(id, dataSave);
    };

    const listAll = () => {
        return listTodos();
    };

    const remove = (id) => {
        deleteTodo(id);
    };

    //return { todos, setTodos: updatetodos, saveOnly };
    return { todos, setTodos, saveOnly, listAll, saveNewTodo, remove };
};
