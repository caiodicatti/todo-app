import React, { useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalSuccess = ({ show, handleClose, text }) => {

    useEffect(() => {
        console.log('entrou efect')
        if (show) {
            console.log('entrou IF efect')
            const timer = setTimeout(() => {
                handleClose();
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [show, handleClose]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Sucesso</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
                {text}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalSuccess;