import React from 'react';
import { Provider } from 'react-redux';
import { create, act } from 'react-test-renderer';
import configureStore from '../../store/expense-store'

import LoginPage from '../../components/LoginPage'

let store;
let renderer;

beforeEach(() => {
    store = configureStore()

    renderer = create(
        <Provider store={store}>
            <LoginPage />
        </Provider>
    );
})

test('Should render Login component correctly', () => {
    expect(renderer).toMatchSnapshot();
})