import React from 'react';
import * as FilterTypes from '../actions/types/filter-types';

export default class Footer extends React.Component {
    static propTypes = {
        filter: React.PropTypes.oneOf([FilterTypes.ALL, FilterTypes.ACTIVE, FilterTypes.COMPLETED]).isRequired,
        changeFilter: React.PropTypes.func.isRequired
    };

    renderFilter(value, text) {
        if(value === this.props.filter) {
            return text;
        }

        return (
            <a onClick={(e) => this.props.changeFilter(value)}
                  style={{cursor: 'pointer'}}>
                {text}
            </a>
        );
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