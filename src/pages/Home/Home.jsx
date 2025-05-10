import React, { useState } from 'react';
import TodoList from '../../components/TodoList/TodoList'
import './Home.css';
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalNewTodo from "../../components/ModalNewTodo/ModalNewTodo";

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="container-fluid px-4">
            <h2 className="my-4">Suas Listas</h2>
            <TodoList />

            <button className="btn btn-success btn-fixed" onClick={handleShow}>
                <FaPlus />
            </button>

            <ModalNewTodo show={showModal} handleClose={handleClose} />
        </div>
    )
}

export default Home