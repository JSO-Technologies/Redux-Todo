import React from 'react';

export default class Footer extends React.Component {
    propTypes: {
        filter: React.PropTypes.string.isRequired,
        changeFilter: React.PropTypes.func.isRequired
    };

    renderFilter(value, text) {
        if(value === this.props.filter) {
            return text;
        }

        return <a onClick={(e) => this.props.changeFilter(value)} >{text}</a>;
    }

    render() {
        return (
            <p>
                Filter by:
                { ' ' }
                { this.renderFilter('ALL', 'All') }
                { ' / ' }
                { this.renderFilter('ACTIVE', 'Active') }
                { ' / ' }
                { this.renderFilter('COMPLETED', 'Completed') }
            </p>
        );
    }
};