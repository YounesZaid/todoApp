import React, { Component } from 'react';

import LogoContainer from './logo/LogoContainer';
import TodoListContainer from './todo-list/TodoListContainer';
import AddTodoContainer from './add-todo/AddTodoContainer';

import './App.css';

let _defaultTodos = [
  {
    id: 1,
    text: 'Todo1'
  },
  {
    id: 2,
    text: 'Todo2'
  },
  {
    id: 3,
    text: 'Todo3'
  },
  {
    id: 4,
    text: 'Todo4'
  },
]

export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    this._deleteItem = this._deleteItem.bind(this);
    this.state = {
      todos: _defaultTodos
    }
  }

  _deleteItem(todoObj) {
    let newArray = [];
    // code
    this.state.todos.forEach((element, i) => {
      if(todoObj.id !== element.id) {
        newArray.push(element);
      }
    })
    this.setState({
      todos: newArray
    })
  }
  render() {
    return (
      <div className="container">
        <LogoContainer />
        <div className="sub-container">
          <TodoListContainer todosList={this.state.todos} deleteTodoItem={this._deleteItem} />
          <AddTodoContainer />
        </div>
      </div>
    )
  }
}
