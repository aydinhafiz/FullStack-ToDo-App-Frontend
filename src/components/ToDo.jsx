import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { STodo, STodos } from "../pages/home.styles";

function ToDo({ text, updateMode, deleteTodo }) {
  return (
    
    <STodos>
      <STodo>
        <div className="text">{text}</div>
        <div className="icons">
          <BiEdit className="icon" onClick={updateMode} />
          <AiFillDelete className="icon" onClick={deleteTodo} />
        </div>
      </STodo>
    </STodos>
  );
}

export default ToDo;
