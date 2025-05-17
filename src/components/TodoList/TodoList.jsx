import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiSmileySad } from 'react-icons/pi';
import { TiDelete } from "react-icons/ti";
import { useTodo } from '../../hooks/useTodo';
import ModalConfirmDelete from '../ModalConfirmDelete/ModalConfirmDelete';
import './TodoList.css';

const TodoList = () => {
    // Custom Hook
    const { remove, listAll } = useTodo();

    // States
    const [allTodos, setAllTodos] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState(null);

    // Effects
    useEffect(() => {
        setAllTodos(listAll());
    }, []);

    const handleOpenModalConfirmDelete = (todo) => {
        setTodoToDelete(todo);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirmed = () => {
        remove(todoToDelete.id);
        setAllTodos(listAll());
        setShowDeleteModal(false);
        setTodoToDelete(null);
    };

    return (
        <div className="container">
            <div className="row">
                {!allTodos || allTodos.length === 0 ? (
                    <div className="msg-empty">
                        Ixii .. você não possui listas cadastradas <PiSmileySad />
                    </div>
                ) : (
                    allTodos
                        .slice()
                        .sort((a, b) => a.id - b.id)
                        .map((todo) => (
                            <div key={todo.id} className="col-md-4 mb-3 d-flex">
                                <div className="card-color w-100 position-relative d-flex flex-column">
                                    <button
                                        className="btn btn-link position-absolute top-0 end-0 m-2 p-1 text-danger"
                                        style={{ zIndex: 10 }}
                                        onClick={() => handleOpenModalConfirmDelete(todo)}
                                        aria-label="Excluir lista"
                                    >
                                        <TiDelete size={25} />
                                    </button>

                                    <h5 className="card-title mt-2">{todo.name}</h5>

                                    <div className="row g-2 justify-content-center mt-auto">
                                        <div className="col-auto">
                                            <Link
                                                to={`/todo/use/${todo.id}`}
                                                className="btn btn-success me-2 btn-default-size"
                                            >
                                                Checklist
                                            </Link>
                                        </div>

                                        <div className="col-auto">
                                            <Link
                                                to={`/todo/${todo.id}`}
                                                className="btn btn-primary me-2 btn-default-size"
                                            >
                                                Editar
                                            </Link>
                                        </div>
                                    </div>

                                    <ModalConfirmDelete
                                        show={showDeleteModal}
                                        onClose={() => setShowDeleteModal(false)}
                                        onConfirm={handleDeleteConfirmed}
                                        title="Deseja excluir essa lista?"
                                        body={`Você tem certeza que deseja excluir a lista "${todoToDelete?.name}"?`}
                                    />
                                </div>
                            </div>
                        ))
                )}
            </div>
        </div>
    );
};

export default TodoList;
