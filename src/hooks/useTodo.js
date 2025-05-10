import { useState, useEffect } from 'react';
import { getTodo, saveTodo, listTodos } from '../services/localStorageService';
import { generate } from '../services/generateId';

export const useTodo = (todoId) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const stored = getTodo(todoId);
        if (stored) {
            setTasks(stored)
        };
    }, [todoId]);

    /*
    const updateTasks = (newTasks) => {
        setTasks(newTasks);
        var id = todoId ?? generate();
        saveTodo(id, newTasks);
    };
    */

    const saveOnly = () => {
        const id = todoId ?? generate();
        saveTodo(id, tasks);
    };

    //return { tasks, setTasks: updateTasks, saveOnly };
    return { tasks, setTasks, saveOnly };
};
