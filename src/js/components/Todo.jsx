import React from 'react';

export default class Todo extends React.Component {
    static propTypes = {
        id: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
        done: React.PropTypes.bool.isRequired,
        complete: React.PropTypes.func.isRequired
    };

    getStyle() {
        return  {
            textDecoration: (this.props.done ? 'line-through' : 'none'),
            cursor: (this.props.done ? 'default': 'pointer')
        };
    }

    render() {
        return (
            <div style={this.getStyle()}
                 onClick={this.props.complete.bind(this, this.props.id)}>
                {this.props.text}
            </div>
        );
    }
};