import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  addTodo,
  editTodo,
  setSelectedIndex,
} from "../../../features/TodoSlice";
import { useSelector, useDispatch } from "react-redux";

const Form = ({ input, setInput }) => {
 
  let selectedIndex = useSelector((state) => state.todo.selectedIndex);


  const dispatch = useDispatch();
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (selectedIndex !== null && selectedIndex !== undefined) {
      dispatch(editTodo(input));
    } else {
      dispatch(addTodo({ id: uuidv4(), title: input, completed: false }));
    }
    setInput("");
    dispatch(setSelectedIndex(null));
  };

  

  return (
    <form
      onSubmit={onFormSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
     
    
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Enter a Todo Task..."
          className="todo-task-input todo-input"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="todo-button-add todo-button" type="submit">
        {selectedIndex !== null && selectedIndex !== undefined ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default Form;
