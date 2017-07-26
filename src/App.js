import React, { Component } from 'react';
import lodash from 'lodash';

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
    this._addItem = this._addItem.bind(this);
    // lodash
    this._deleteItemLodash = this._deleteItemLodash.bind(this);
    this._addItemLodash = this._addItemLodash.bind(this);
    // filter
    this._deleteItemFilter = this._deleteItemFilter.bind(this);
    this.state = {
      todos: _defaultTodos
    }
  }

  // Lodash
  _deleteItemLodash(todoObj) {
    let newArray = lodash.cloneDeep(this.state.todos);
    lodash.remove(newArray, (element) => {
      return element.id === todoObj.id;
    });
    this.setState({
      todos: newArray
    });
  }
  
  // Filter
  _deleteItemFilter(todoObj) {
    let newArray = this.state.todos.filter(element => {
      return element.id !== todoObj.id;
    });
    this.setState({
      todos: newArray
    })
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

  _addItemLodash(text) {
    let newArray = lodash.cloneDeep(this.state.todos);
    let todoItem = {
      id: Math.round(Math.random() * 100),
      text: text
    };

    newArray.push(todoItem);
    this.setState({
      todos: newArray
    })
  }

  _addItem(text) {
    let todoItem = {
      id: Math.round(Math.random() * 100),
      text: text
    }
    let newArray = [];
    this.state.todos.forEach((element, index) => {
      newArray.push(element);
    });
    newArray.push(todoItem);
    this.setState({
      todos: newArray
    });
  }

  render() {
    return (
      <div className="container">
        <LogoContainer />
        <div className="sub-container">
          <TodoListContainer todosList={this.state.todos} deleteTodoItem={this._deleteItemFilter} />
          <AddTodoContainer addTodoItem={this._addItem} />
        </div>
      </div>
    )
  }
}
