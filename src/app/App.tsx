import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadTodos, createTodoList } from "features/todoList/todoSlice";
import AddTodo from "features/todoList/AddTodo";
import TodoList from "features/todoList/TodoList";
import Footer from "features/visibilityFilter/Footer";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.pathname === "/") {
      dispatch(createTodoList());
    } else {
      dispatch(loadTodos());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}
