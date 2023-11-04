import React, { useState } from "react";
import "./to_do_list.css"; // Import the CSS file

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: true },
    { id: 3, text: "Todo 3", completed: false },
    { id: 4, text: "Todo 4", completed: true },
    { id: 5, text: "Todo 5", completed: false },
    { id: 6, text: "Todo 1", completed: false },
    { id: 7, text: "Todo 2", completed: true },
    { id: 8, text: "Todo 3", completed: false },
    { id: 9, text: "Todo 4", completed: true },
  ]);

  const handleAddTodo = () => {
    const newTodo = { id: todos.length + 1, text: "", completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="empty-message">
            No tasks yet! Click on the "Add Todo" button to get started.
          </div>
        ) : (
          todos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    // Implement checkbox change logic here
                  }}
                />
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => {
                    const newText = e.target.value;
                    setTodos((prevTodos) =>
                      prevTodos.map((prevTodo) =>
                        prevTodo.id === todo.id
                          ? { ...prevTodo, text: newText }
                          : prevTodo
                      )
                    );
                  }}
                  className="dynamic-width-input"
                />
              </div>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
      <button className="add-button" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default TodoList;
