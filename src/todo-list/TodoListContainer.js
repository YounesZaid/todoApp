import React, { Component } from 'react';
import './TodoListContainer.css';

export default class TodoListContainer extends Component {
  render() {
    return (
      <div className="todo-list-container">
        {false && <div className="empty">
          <img src="img/empty-list.png" />
        </div>
        }
        <h3>My todos:</h3>
        <p className="todo-item">
          <span>My todo item</span>
          <a href="#" className="zmdi zmdi-delete"></a>
        </p>
      </div>
    )
  }
}
