import {ADD_TODO} from './types/action-types';

export default function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
};