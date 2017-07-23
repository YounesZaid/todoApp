import React, { Component } from 'react';

import LogoContainer from './logo/LogoContainer';
import TodoListContainer from './todo-list/TodoListContainer';
import AddTodoContainer from './add-todo/AddTodoContainer';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <LogoContainer />
        <div className="sub-container">
          <TodoListContainer />
          <AddTodoContainer />
        </div>
      </div>
    )
  }
}
