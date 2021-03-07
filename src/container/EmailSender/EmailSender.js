import React, {useEffect, useState} from 'react'
import Layout from '../../components/Layout/Layout';
import './EmailSender.css'
import { sendEmail } from '../../services/SendEmail'
import Modal from '../../components/Modal/Modal';

const EmailSender = () => {
    const [ emailOptions, setEmailOptions ] = useState( {
        email: '',
        message: '',
        subject: ''
    });
    useEffect(
        () => {},[]
    )
    const [ showModal, setShowModal ] = useState( false ); 
    const handleChange = ( e ) => {
        setEmailOptions( {...emailOptions, [e.target.name]: e.target.value } )
    }
    const onSendEmail = () => {
        sendEmail( emailOptions ).then(
            response => {
                alert('Se envio el mensaje')
            }
        ).catch(error => {
            setShowModal(true)
        })
    }
    return (
        <Layout>
            <div>
                <form className="box email-form">
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input background-lightblue" 
                            name="email"
                            type="email" 
                            placeholder="e.g. alex@example.com"
                            onChange={ handleChange } />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <input className="input background-lightblue" 
                            name="subject"
                            type="text" 
                            placeholder="Subject"
                            onChange={ handleChange } />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea background-lightblue" 
                            name="message"
                            id="textarea-email" 
                            placeholder="Write here."
                            onChange={ handleChange } ></textarea>
                        </div>
                    </div>
                    <button className="button is-primary" type='button' onClick={ onSendEmail }>Send email</button>
                </form>
            </div>
        { showModal && <Modal closeModal = { () => setShowModal(false) }>

        </Modal>}
        </Layout>
    )
}

export default EmailSender;