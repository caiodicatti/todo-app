import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTodo } from '../../hooks/useTodo';
import './ModalNewTodo.css';

const ModalNewTodo = ({ show, handleClose }) => {
    // Custom Hook
    const { saveNewTodo } = useTodo();

    // State
    const [todoName, setTodoName] = useState('');

    // Router
    const navigate = useNavigate();

    // Handlers
    const handleCleanAndClose = () => {
        setTodoName("");
        handleClose();
    };

    const handleSaveTodo = () => {
        var newTodoId = saveNewTodo(todoName);
        navigate(`/todo/${newTodoId}`);
        handleClose();
    };

    return (
        <div>
            {/* Modal para adicionar nova Todo */}
            <Modal show={show} onHide={handleCleanAndClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Nova Lista</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTodoName">
                            <Form.Label>Nome da Lista</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o nome da lista"
                                value={todoName}
                                onChange={(e) => setTodoName(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCleanAndClose}>
                        Fechar
                    </Button>
                    <Button variant="success" onClick={handleSaveTodo}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalNewTodo