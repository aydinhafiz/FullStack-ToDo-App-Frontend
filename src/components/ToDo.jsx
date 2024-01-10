import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { STodo } from "../pages/home.styles";

function ToDo({ text, updateMode, deleteTodo }) {
  return (
    <STodo>
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteTodo} />
      </div>
    </STodo>
  );
}

export default ToDo;
