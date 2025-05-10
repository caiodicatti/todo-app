import React, { useState, useEffect } from 'react'
import './TodoList.css';
import { useTodo } from '../../hooks/useTodo';
import { Link } from "react-router-dom";
import { PiSmileySad } from "react-icons/pi";

const TodoList = () => {

    const { remove, listAll } = useTodo();
    const [allTodos, setAllTodos] = useState([]);

    useEffect(() => {
        setAllTodos(listAll());
    }, []);

    const removeTodo = (todoId) => {
        remove(todoId)
        setAllTodos(listAll());
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
                                <button className="btn btn-danger btn-default-size" onClick={() => removeTodo(todo.id)}>
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default TodoList