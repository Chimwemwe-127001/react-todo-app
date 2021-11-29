/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    const { todos, handleChangeProps, deleteTodoProps } = this.props;
    const listTodo = todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
      />
    ));
    return (
      <ul>
        {listTodo}
      </ul>
    );
  }
}

export default TodosList;
