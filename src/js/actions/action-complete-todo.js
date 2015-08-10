import {COMPLETE_TODO} from './types/action-types';

export default function completeTodo(id) {
    return {
        type: COMPLETE_TODO,
        id
    }
};