import React, { Component } from 'react';
import './TodoListContainer.css';

export default class TodoListContainer extends Component {
  render() {
    if(this.props.todosList.length === 0) {
      return (
        <div className="todo-list-container">
          <div className="empty">
            <img alt="" src="img/empty-list.png" />
          </div>
        </div>
      )
    }
    return (
      <div className="todo-list-container">
        <h3>My todos:</h3>
        {this.props.todosList.map((todoObj, index) => {
          return (
            <p key={todoObj.id} className="todo-item">
              <span>{todoObj.text}</span>
              <a href="#Delete" className="zmdi zmdi-delete"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.deleteTodoItem(todoObj);
              }}> </a>
            </p>
          );
        })}
      </div>
    )
  }

}
