import { useEffect, useState } from "react";
import ToDo from "../components/ToDo";
import {
  addToDo,
  getAllTodo,
  updateToDo,
  deleteToDo,
} from "../utils/HandleApi";

function Home() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllTodo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>ToDo App</h1>
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
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
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
      </div>
    </div>
  );
}

export default Home;
