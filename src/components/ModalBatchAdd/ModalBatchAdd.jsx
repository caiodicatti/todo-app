import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ModalBatchAdd.css';

const ModalBatchAdd = ({ show, handleClose, onSaveBatch }) => {
    const [batchText, setBatchText] = useState('');

    const handleCleanAndClose = () => {
        setBatchText('');
        handleClose();
    };

    const handleSaveBatch = () => {
        const tasks = batchText
            .split('\n')
            .map(t => t.trim())
            .filter(t => t.length > 0);

        if (tasks.length > 0) {
            onSaveBatch(tasks);
        }

        handleCleanAndClose();
    };

    return (
        <Modal show={show} onHide={handleCleanAndClose} className='modalBody'>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Tarefas em Lote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBatchTasks">
                        <Form.Label>Digite uma tarefa por linha</Form.Label>
                        <Form.Control
                            className="input-bg"
                            as="textarea"
                            rows={6}
                            placeholder={`Exemplo:\nComprar leite\nIr a academia\nEstudar`}
                            value={batchText}
                            onChange={(e) => setBatchText(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCleanAndClose}>
                    Fechar
                </Button>
                <Button variant="success" onClick={handleSaveBatch}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalBatchAdd;
