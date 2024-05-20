import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, content) => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요!");
      return;
    }

    setTodos([...todos, { id: Date.now(), title, content, isDone: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm addTodo={addTodo} />
      <h2>Working</h2>
      <TodoList
        todos={todos.filter((todo) => !todo.isDone)}
        deleteTodo={deleteTodo}
        toggleTodoDone={toggleTodoDone}
      />
      <h2>Done</h2>
      <TodoList
        todos={todos.filter((todo) => !todo.isDone)}
        deleteTodo={deleteTodo}
        toggleTodoDone={toggleTodoDone}
      />
    </>
  );
}
