import React, { Component } from 'react';
import './TodoListContainer.css';

export default class TodoListContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'myTodo'
        },
        {
          id: 2,
          text: 'myTodo2'
        },
        {
          id: 3,
          text: 'myTodo3'
        },
        {
          id: 4,
          text: 'myTodo4'
        }
      ]
    }
  }

  render() {
    return (
      <div className="todo-list-container">
        {false && <div className="empty">
          <img src="img/empty-list.png" />
        </div>
        }
        <h3>My todos:</h3>
        {this.state.todos.map(todoObj => {
          return (
            <p key={todoObj.id} className="todo-item">
              <span>{todoObj.text}</span>
              <a href="#" className="zmdi zmdi-delete"></a>
            </p>
          );
        })}
      </div>
    )
  }
}
