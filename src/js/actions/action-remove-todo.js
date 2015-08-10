import {REMOVE_TODO} from './types/action-types';

export default function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
};