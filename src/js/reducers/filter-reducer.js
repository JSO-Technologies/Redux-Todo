import {CHANGE_FILTER} from '../actions/types/action-types';
import {ALL} from '../actions/types/filter-types';

export default function filter(state = ALL, action = {}) {
    switch(action.type) {
        case CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
};