import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}!
            </div>
        );
    }
}

export default Home;
