import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/expense-store'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import db from './db/firebase'

const query = db.collection('expenses').get();
query.then((snapshot) => {
    var expenses = [];
    snapshot.forEach((document) => {
        expenses.push({
            id: document.id, 
            ...document.data()
        })
    });
    return expenses;
}).then((result) => {
    const store = configureStore(result);    

    ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('root'));
})




