import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ButtonFloatingAction from '../../components/ButtonFloatingAction/ButtonFloatingAction';
import TitleCardDefault from '../../components/TitleCardDefault/TitleCardDefault';
import { FaCalendarCheck } from "react-icons/fa";

import './TodoUse.css';

import { useTodo } from '../../hooks/useTodo';

const TodoUse = () => {
    // Router
    const { id: todoId } = useParams();
    const navigate = useNavigate();

    // Custom Hook
    const { todos, setTodos, saveOnly } = useTodo(todoId);

    const handleChange = (taskChecked) => {
        const updatedTasks = todos.tasks.map((task) =>
            task.id === taskChecked.id ? { ...task, check: !taskChecked.check } : task
        );

        const updatedTodos = {
            ...todos,
            tasks: updatedTasks
        };

        setTodos(updatedTodos);
        saveOnly(updatedTodos);
    };

    const returnHome = () => {
        navigate(`/`);
    };

    return (
        <div className="container mt-5">

            <TitleCardDefault title={todos.name} icon={<FaCalendarCheck style={{ marginRight: 10, color: '#00b09b' }} />} />

            <ul className="list-group">
                {todos.tasks && todos.tasks.map((t, index) => (
                    <li key={t.id} className={`list-group-item d-flex justify-content-between align-items-center list-item input-bg ${t.check ? 'checked' : ''}`}>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="customSwitch"
                                checked={t.check}
                                onChange={() => handleChange(t)}
                            />

                            <span>{t.text}</span>
                        </div>
                    </li>
                ))}
            </ul>

            <ButtonFloatingAction text={'Voltar'} style={'btn btn-primary'} action={returnHome} title={'Voltar a página home'} />
        </div>
    )
}

export default TodoUse