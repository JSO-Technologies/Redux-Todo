import React from 'react';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';

import Immutable from 'immutable';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo addTodo={text => console.log('add todo', text)}/>
                <TodoList
                    todos={Immutable.List.of(
                        Immutable.fromJS({
                            id: 1,
                            text: 'Use Redux',
                            done: true
                        }),
                        Immutable.fromJS({
                            id: 0,
                            text: 'Learn to connect it to React',
                            done: false
                        })
                    )}
                    complete={id => console.log('todo clicked', id)}/>
                <Footer
                    filter='ALL'
                    changeFilter={filter => console.log('filter change', filter)}/>
            </div>
        );
    }
};