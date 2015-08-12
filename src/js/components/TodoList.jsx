import React from 'react';
import Todo from './Todo.jsx';

export default class TodoList extends React.Component {
    static propTypes = {
        todos: React.PropTypes.object.isRequired,
        complete: React.PropTypes.func.isRequired
    };

    render() {
        return (
            <ul>
                {
                    this.props.todos.map((item, index) =>
                        <li key={index}>
                            <Todo
                                  id={item.get('id')}
                                  text={item.get('text')}
                                  done={item.get('done')}
                                  complete={this.props.complete} />
                        </li>
                    )
                }
            </ul>
        );
    }
};