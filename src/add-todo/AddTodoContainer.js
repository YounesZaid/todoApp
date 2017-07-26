import React, { Component } from 'react';
import './AddTodoContainer.css';

export default class AddTodoContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todoText: ''
    }
  }
  render() {
    return (
      <div className="add-todo-container">
        <h3>Add new Todo:</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.addTodoItem(this.state.todoText);
          this.setState({
            todoText: ''
          });
        }}>
          <textarea value={this.state.todoText} onChange={(e) => {
            e.preventDefault();
            this.setState({
              todoText: e.target.value
            })
          }} placeholder="my todo content"></textarea>
          <button type="submit"><i className="zmdi zmdi-plus"></i> Add new todo</button>
        </form>
      </div>
    )
  }
}
