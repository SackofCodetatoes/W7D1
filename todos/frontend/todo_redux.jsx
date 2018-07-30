import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
// import Root from ./com

// import receiveTodos from './actions/todo_actions';
const store = configureStore();
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
// const store = configureStore();

document.addEventListener("DOMContentLoaded", function(){
  const content = document.getElementById("content");
  // ReactDOM.render(<h1>Todos App</h1>, content);
  ReactDOM.render(<App />, content);
});

// window.store = store;
// window.store.getState();
