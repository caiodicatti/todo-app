import React from 'react'
import './ModalConfirmDelete.css';
import { Modal, Button } from 'react-bootstrap';

const ModalConfirmDelete = ({ show, onClose, onConfirm, title = "Tem certeza?", body = "Essa ação não pode ser desfeita." }) => {

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{body}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Confirmar Exclusão
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalConfirmDelete;