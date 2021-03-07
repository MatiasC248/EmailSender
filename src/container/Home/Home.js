import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory();
    return(
        <div>
            <h1>Soy el home</h1>
            <button onClick = { () => {history.push('/email')} }>EmailSender</button>
        </div>
    )
}

export default Home;