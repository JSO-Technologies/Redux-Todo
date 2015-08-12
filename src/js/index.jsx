import React from 'react';
import { Provider } from 'react-redux';
import store from './store/todo-store';
import App from './components/App.jsx';

React.render(
    <Provider store={store}>
        { () => <App /> }
    </Provider>,
    document.getElementById('main'));