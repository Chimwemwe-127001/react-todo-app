/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        {todo.title}
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
