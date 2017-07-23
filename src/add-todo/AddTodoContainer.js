import React, { Component } from 'react';
import './AddTodoContainer.css';

export default class AddTodoContainer extends Component {
  render() {
    return (
      <div className="add-todo-container">
        <h3>Add new Todo:</h3>
        <form>
          <textarea placeholder="my todo content"></textarea>
          <button type="submit"><i className="zmdi zmdi-plus"></i> Add new todo</button>
        </form>
      </div>
    )
  }
}
