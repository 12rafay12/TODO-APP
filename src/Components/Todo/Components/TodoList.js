import "../Todo.scss";

import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  removeTodo,
  setSelectedIndex,
  doneTodo,
  setInitialState,
} from "../../../features/TodoSlice";

const TodoList = ({ handleEdit }) => {
  const [searchValue, setSearchValue] = useState("");

  const [showFilteredItems, setShowFilteredItems] = useState(false);

  const list = useSelector((state) => state.todo.list);

  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo.list);

  useEffect(() => {
    const isList = JSON.parse(localStorage.getItem("list") || "[]");

    if (isList.length > list.length) {
      dispatch(setInitialState(isList));
    }
  }, [dispatch, list]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handledeleteClick = (index) => {
    dispatch(removeTodo(index));

    const updatedList = [...list];

    updatedList.splice(index, 1);

    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  const handleEditClick = (index) => {
    if (todo[index].completed !== true) {
      handleEdit(index, todo[index].title);
    }
  };

  const handleDoneClick = (index) => {
    dispatch(setSelectedIndex(index));

    dispatch(doneTodo(index));

    dispatch(setSelectedIndex(null));
  };

  const handleSearchClick = () => {
    setShowFilteredItems(searchValue !== "");
  };

  const searchInputStyle = {
    marginTop: "15px",

    marginRight: "10px",

    padding: "8px 10px",

    fontSize: "16px",

    border: "1px solid #c89666",

    borderRadius: "10px",

    width: "260px",

    outline: "none",

    backgroundColor: "#000000",

    color: "#ccc",
  };

  const searchButtonStyle = {
    marginLeft: "16px",

    marginTop: "9px",
  };

  const renderTodoItem = (todo, index) => (
    <div className="todo-list" key={todo.id}>
      <div className="todo-item-container">
        <div
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
          className="todo-list-item"
        >
          {todo.title}
        </div>

        <div className="button-container">
          <button
            className="todo-button-complete task-button"
            onClick={() => handleDoneClick(index)}
          >
            <i className="fa fa-check-circle"></i>
          </button>

          <button
            className="todo-button-edit task-button"
            onClick={() => handleEditClick(index)}
          >
            <i className="fa fa-edit"></i>
          </button>

          <button
            className="todo-button-delete task-button"
            onClick={() => handledeleteClick(index)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>

        {/* {showFilteredItems || (

         

        )} */}
      </div>
    </div>
  );

  const filteredList = showFilteredItems
    ? list.filter((todo) => todo.title.includes(searchValue))
    : list;

  return (
    <>
      <div
        style={{
          display: "flex",

          alignItems: "center",

          gap: "10px",

          marginBottom: "20px",
        }}
      >
        <input
          style={searchInputStyle}
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => {
            setSearchValue(event.target.value);

            if (event.target.value === "") {
              setSearchValue("");

              setShowFilteredItems(false);
            }
          }}
          value={searchValue}
        />

        <button
          style={searchButtonStyle}
          className="todo-button-add todo-button"
          type="submit"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>

      {filteredList.map((todo, index) => renderTodoItem(todo, index))}
    </>
  );
};

export default TodoList;
