import React from "react";

export function TodoInput(props) {
  // This component displays the input field for adding a new todo
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add Task"
      />
      <button
        onClick={() => {
          if (!inputValue) return; // Prevent adding empty todos
          handleAddTodo(inputValue);
          setInputValue(""); // Clear input field after adding
        }}
        className="add-button"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
