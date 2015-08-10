import {CHANGE_FILTER} from './types/action-types';

export default function changeFilter(filter) {
    return {
        type: CHANGE_FILTER,
        filter
    }
};