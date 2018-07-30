import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      let nextTodos = {};
      for(let i = 0; i < action.todos.length; i++){
        nextTodos[action.todos[i].id] = action.todos[i];
      }
      return nextTodos;
      // break;
    case RECEIVE_TODO:
      nextTodos = merge({}, state);
      nextTodos[action.todo.id] = action.todo;
      return nextTodos;

    default:
      return state;

  }
};

export default todosReducer;
