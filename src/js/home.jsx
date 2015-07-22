import React from 'react';
import Print from './print';

export default class Home extends React.Component {
    render() {
        Print.sayHello();
        return (
            <div>
                Hello {this.props.name}!
            </div>
        );
    }
}
