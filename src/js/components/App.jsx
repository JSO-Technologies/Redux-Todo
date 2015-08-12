import React from 'react';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';

import addTodo from '../actions/action-add-todo';
import completeTodo from '../actions/action-complete-todo.js';
import changeFilter from '../actions/action-change-filter';

import Immutable from 'immutable';
import { connect } from 'react-redux';

import StateSelector from '../selector/state-selector';

@connect(StateSelector)
export default class App extends React.Component {
    render() {
        const { dispatch, state } = this.props;

        return (
            <div>
                <AddTodo addTodo={ text => dispatch(addTodo(text)) }/>
                <TodoList
                    todos={ state.todos }
                    complete={ id => dispatch(completeTodo(id)) }/>
                <Footer
                    filter={ state.filter }
                    changeFilter={ filter => dispatch(changeFilter(filter)) }/>
            </div>
        );
    }
};