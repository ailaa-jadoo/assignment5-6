import { ADD_TODO, DELETE_TODO, SET_TODOS, TOGGLE_COMPLETE } from './actions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case ADD_TODO:
        return { ...state, todos: [...state.todos, action.payload] };

        case DELETE_TODO:
        return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload),
        };

        case SET_TODOS:
        return { ...state, todos: action.payload };

        case TOGGLE_COMPLETE:
        return {
            ...state,
            todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            ),
        };

        default:
        return state;
    }
};

export default todoReducer;