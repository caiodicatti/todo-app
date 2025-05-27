import React, { useState } from 'react';
import './Home.css';
import TodoList from '../../components/TodoList/TodoList';
import ModalNewTodo from '../../components/ModalNewTodo/ModalNewTodo';
import ButtonFloatingAction from '../../components/ButtonFloatingAction/ButtonFloatingAction';
import TitleCardDefault from '../../components/TitleCardDefault/TitleCardDefault';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import FooterSignature from '../../components/FooterSignature/FooterSignature';
import { FaPlus, FaListAlt } from 'react-icons/fa';

const Home = () => {

    // States
    const [showModal, setShowModal] = useState(false);

    // Handlers
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="container-fluid px-3">

            <div className="theme-toggle-container">
                <ThemeToggle />
            </div>

            <TitleCardDefault title={'Suas Listas'} icon={<FaListAlt style={{ marginRight: 10, color: '#00b09b' }} />} />

            <TodoList />

            <ButtonFloatingAction text={<FaPlus />} style={'btn btn-success'} action={handleShow} title={'Criar nova lista'} />

            <FooterSignature />

            <ModalNewTodo show={showModal} handleClose={handleClose} />
        </div>
    )
}

export default Home