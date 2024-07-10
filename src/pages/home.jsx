import React, { useEffect, useState } from "react";
import ToDo from "../components/ToDo";
import { addToDo, getAllTodo, updateToDo, deleteToDo } from "../utils/HandleApi";
import { SContent } from "./home.styles";
import axios from "axios";

const Home = ({ logout }) => {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      getAllTodo(setToDo);
    };
    fetchData();
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="container">
      <SContent className="content">
        <h1>ToDo App</h1>
        <button onClick={logout}>Logout</button>
        <div className="top">
          <input
            className="add-input"
            type="text"
            placeholder="Add ToDos.."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="add-button"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </SContent>
    </div>
  );
};

export default Home;
