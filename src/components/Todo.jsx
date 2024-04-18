// Todo.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

// Component for the main Todo application
const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // add a new todo
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  //Handler for adding todo
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  // Handler for changing search term
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="todo">
      <h1 className="todo-heading">TODO APP</h1>
      <p>This is a super duper cool todo app!</p>
      <div className="todo-input-button-div">
        <input
          id="addTodoInput"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={handleAddTodoClick}>
          <BsPlus size={20} />
        </button>
      </div>

      <div className="todo-search-filter-div">
        <FilterButtons />
        <div className="todo-filter-search">
          <input
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button>
            <BsSearch size={17} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
