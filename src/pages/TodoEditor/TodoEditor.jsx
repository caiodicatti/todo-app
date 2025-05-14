import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TiDeleteOutline } from "react-icons/ti";
import { BiAddToQueue } from "react-icons/bi";
import ButtonFloatingAction from '../../components/ButtonFloatingAction/ButtonFloatingAction';
import 'bootstrap/dist/css/bootstrap.min.css';

import './TodoEditor.css';

import { useTodo } from '../../hooks/useTodo';
import EditableText from '../../components/EditableText/EditableText';
import ModalSuccess from '../../components/ModalSuccess/ModalSuccess';

const TodoEditor = () => {
    // Router
    const { id: todoId } = useParams();
    const navigate = useNavigate();

    // Refs
    const inputTaskValue = useRef(null);

    // States
    const [task, setTask] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    // Custom Hook
    const { todos, setTodos, saveOnly } = useTodo(todoId);

    const generateNextId = (tasks) => {
        if (tasks.length === 0) return 1;
        return Math.max(...tasks.map(task => task.id)) + 1;
    };

    const handleAdd = () => {
        if (!task.trim()) return;

        const newId = generateNextId(todos.tasks);

        const newTask = { id: newId, text: task, check: false };

        const updatedTodos = {
            ...todos,
            tasks: [...todos.tasks, newTask]
        };

        setTodos(updatedTodos);
        setTask('');
        inputTaskValue.current?.focus();
    };

    const removeTask = (taskId) => {
        const removed = {
            ...todos,
            tasks: todos.tasks.filter((task) => task.id !== taskId)
        };

        setTodos(removed);
    };

    const editTask = (taskId, newValue) => {
        const updatedTasks = todos.tasks.map((task) =>
            task.id === taskId ? { ...task, text: newValue } : task
        );

        const updatedTodos = {
            ...todos,
            tasks: updatedTasks
        };

        setTodos(updatedTodos);
    };

    const saveTodoList = () => {
        saveOnly();
        setShowSuccess(true);
    };

    const returnHome = () => {
        navigate(`/`);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">{todos.name}</h1>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite sua tarefa"
                    value={task}
                    ref={inputTaskValue}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAdd}>
                    <BiAddToQueue className='fs-5' />
                </button>
            </div>

            <ul className="list-group">
                {todos.tasks && todos.tasks.map((t, index) => (
                    <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <EditableText text={t.text} onSave={(newValue) => editTask(t.id, newValue)} />
                        <div className="action-buttons">
                            <TiDeleteOutline className="btn-delete" onClick={() => removeTask(t.id)} />
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-3">
                <button className="btn btn-success w-100" onClick={saveTodoList}>Salvar</button>
            </div>

            <ModalSuccess
                show={showSuccess}
                handleClose={() => setShowSuccess(false)}
                text={
                    <>
                        A lista <span className="fw-bold">{todos.name}</span> foi salva com sucesso!
                    </>
                }
            />

            <ButtonFloatingAction text={'Voltar'} style={'btn btn-primary'} action={returnHome} />

        </div>
    );
}

export default TodoEditor