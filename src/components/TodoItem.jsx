import React from "react";

export default function TodoItem({ todo, delteTodo, toggleTodoDone }) {
  return (
    <li>
      <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
        {todo.title} - {todo.content}
      </span>
      <button onClick={() => toggleTodoDone(todo.id)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
      <button onClick={() => delteTodo(todo.id)}>삭제</button>
    </li>
  );
}
