const TODO_KEY_PREFIX = 'todo:';

export const getTodo = (id) => {
    const data = localStorage.getItem(`${TODO_KEY_PREFIX}${id}`);
    return data ? JSON.parse(data) : null;
};

export const saveTodo = (id, data) => {
    localStorage.setItem(`${TODO_KEY_PREFIX}${id}`, JSON.stringify(data));
};

export const deleteTodo = (id) => {
    localStorage.removeItem(`${TODO_KEY_PREFIX}${id}`);
};

export const listTodos = () => {

    return Object.keys(localStorage)
        .filter((key) => key.startsWith(TODO_KEY_PREFIX))
        .map((key) => {
            const todo = JSON.parse(localStorage.getItem(key));
            return { ...todo, id: key.replace(TODO_KEY_PREFIX, '') };
        });
};
