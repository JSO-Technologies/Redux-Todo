import React from 'react';

const TODO_TEXT = 'todoText';

export default class AddTodo extends React.Component {

    propTypes: {
        addTodo: React.PropTypes.func.isRequired
    };

    add() {
        const input = React.findDOMNode(this.refs[TODO_TEXT]);
        const text = input.value.trim();
        this.props.addTodo(text);
        input.value = '';
    }

    render() {
        return (
            <div>
                <input type='text' ref={TODO_TEXT} />
                <button onClick={(e) => this.add(e)}>Add</button>
            </div>
        );
    }
};