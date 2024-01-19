export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_TODOS = 'SET_TODOS';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const toggleComplete = (id) => ({ // New action creator
  type: TOGGLE_COMPLETE,
  payload: id,
});