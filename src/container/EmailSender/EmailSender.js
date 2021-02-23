import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout';
import './EmailSender.css'
import { sendEmail } from '../../services/SendEmail'

const EmailSender = () => {
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ subject, setSubject ] = useState('');
    const onSendEmail = () => {
        sendEmail( email, message, subject ).then(
            response => {
                alert('Se envio el mensaje')
            }
        ).catch(error => {
            alert('Error');
            console.log(error)
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
                            type="email" placeholder="e.g. alex@example.com"
                            onChange={ (e) => setEmail( e.target.value )} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <input className="input background-lightblue" 
                            type="subject" placeholder="Subject"
                            onChange={ (e) => setSubject( e.target.value )} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea background-lightblue" 
                            id="textarea-email" placeholder="Write here."
                            onChange={ (e) => setMessage( e.target.value )} ></textarea>
                        </div>
                    </div>
                    <button className="button is-primary" type='button' onClick={ onSendEmail }>Send email</button>
                </form>
            </div>
        </Layout>
    )
}

export default EmailSender;