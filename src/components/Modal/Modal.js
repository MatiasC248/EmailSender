import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ( { children, closeModal } ) => {
   
    return (
        <div className="modal is-active" id="default-modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Modal title</p>
                    <button 
                        className="delete" 
                        aria-label="close"
                        onClick={ () => closeModal() }></button>
                </header>
                <section className="modal-card-body">
                    { children }
                </section>
                <footer className="modal-card-foot">
                    <button 
                        className="button is-success"
                        onClick={ () => closeModal() }>Save changes</button>
                    <button
                        className="button"
                        onClick={ () => closeModal() }>Cancel</button>
                </footer>
            </div>
        </div>
    )
}

export default Modal;