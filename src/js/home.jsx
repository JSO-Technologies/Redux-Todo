import React from 'react';
import Test from './test';

export class Home extends React.Component {
    render() {
        new Test().sayHello();
        return (
            <div>
                Hello {this.props.name}!
            </div>
        );
    }
}
