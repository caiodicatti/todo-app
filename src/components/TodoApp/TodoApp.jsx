import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiDeleteBack2Line } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import './TodoApp.css';
import EditableText from '../EditableText/EditableText';


const TodoApp = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAdd = () => {
        if (!task.trim()) return;
        setTasks([...tasks, task]);
        setTask('');
    };

    const removeTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
    };

    const editTask = (index, value) => {
        const updated = [...tasks];
        updated[index] = value;
        setTasks(updated);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Minha Lista de Tarefas</h1>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite sua tarefa"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAdd}>
                    Adicionar
                </button>
            </div>

            <ul className="list-group">
                {tasks.map((t, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <EditableText text={t} onSave={(newValue) => editTask(index, newValue)} />
                        <div className="action-buttons">
                            <TiDeleteOutline className="btn-delete" onClick={() => removeTask(index)} />
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-3">
                <button className="btn btn-success w-100">Salvar</button>
            </div>
        </div>
    );
};

export default TodoApp;
