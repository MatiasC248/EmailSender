import axios from "axios";

export function sendEmail ( email, message, subject ) {
    return axios.post('https://anonymous-email-sender.herokuapp.com/send-mail',
    
    {
        email: email, message: message, subject: subject
    })
}