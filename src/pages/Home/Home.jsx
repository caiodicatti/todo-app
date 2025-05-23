import React, { useState } from 'react';
import './Home.css';
import TodoList from '../../components/TodoList/TodoList';
import ModalNewTodo from '../../components/ModalNewTodo/ModalNewTodo';
import ButtonFloatingAction from '../../components/ButtonFloatingAction/ButtonFloatingAction';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {

    // States
    const [showModal, setShowModal] = useState(false);

    // Handlers
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="container-fluid px-4">
            <h2 className="my-4">Suas Listas</h2>
            <TodoList />

            <ButtonFloatingAction text={<FaPlus />} style={'btn btn-success'} action={handleShow} />

            <ModalNewTodo show={showModal} handleClose={handleClose} />
        </div>
    )
}

export default Home