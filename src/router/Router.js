import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import EmailSender from '../container/EmailSender/EmailSender';
import Home from '../container/Home/Home';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route component={ Home } path='/' exact={ true }/>
                <Route component={ EmailSender } path='/email' exact={ true }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;