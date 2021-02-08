import { FaTimes } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import React from "react";

const ToDo = ({ toDo, onDelete, onToggle }) => {
  return (
    <div
      className={`toDos__toDo ${toDo.done ? "done" : ""}`}
      onDoubleClick={() => onToggle(toDo.id)}
    >
      <p>{toDo.text}</p>
      <span>
        <RiCloseCircleLine
          style={{ color: "#fff", cursor: "pointer" }}
          onClick={() => onDelete(toDo.id)}
        />
      </span>
    </div>
  );
};

export default ToDo;
