import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/expense-store'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import { firebase } from './services/firebase'
import { startSetExpense } from './actions/expenses'
import { login, logout } from './actions/auth'

const store = configureStore();
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

let hasRendered = false;
const renderApp = function() {
    if (!hasRendered) {
        ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('root'));
        hasRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
})






