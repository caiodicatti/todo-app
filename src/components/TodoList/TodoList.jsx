import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiSmileySad } from 'react-icons/pi';
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
        remove(todoToDelete.id)
        setAllTodos(listAll());
        setShowDeleteModal(false);
        setTodoToDelete(null);
    };

    return (
        <div className="container">
            <div className="row">
                {!allTodos || allTodos.length == 0 ?
                    <div className='msg-empty'>Ixii .. você não possui listas cadastradas  <PiSmileySad />
                    </div> :
                    ""
                }
                {allTodos && allTodos.map(todo => (
                    <div key={todo.id} className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{todo.name}</h5>
                                <button className="btn btn-success me-2 btn-default-size ">
                                    Utilizar
                                </button>
                                <Link to={`/todo/${todo.id}`} className="btn btn-primary me-2 btn-default-size ">
                                    Editar
                                </Link>
                                <button className="btn btn-danger btn-default-size" onClick={() => handleOpenModalConfirmDelete(todo)}>
                                    Excluir
                                </button>

                                <ModalConfirmDelete
                                    show={showDeleteModal}
                                    onClose={() => setShowDeleteModal(false)}
                                    onConfirm={handleDeleteConfirmed}
                                    title="Deseja excluir essa lista?"
                                    body={`Você tem certeza que deseja excluir a lista "${todoToDelete?.name}"?`}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default TodoList