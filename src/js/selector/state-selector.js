import * as FilterTypes from '../actions/types/filter-types';

function filterTodos(todos, filter) {
    switch(filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.ACTIVE:
            return todos.filter((todo) => !todo.get('done'));
        case FilterTypes.COMPLETED:
            return todos.filter((todo) => todo.get('done'));

        default:
            return todos;
    }
}

export default function(state) {
    return {
        state: {
            todos: filterTodos(state.todos, state.filter),
            filter: state.filter
        }
    };
};