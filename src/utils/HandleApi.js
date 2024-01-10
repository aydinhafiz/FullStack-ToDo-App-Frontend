import axios from "axios";

const basedUrl = "https://fullstack-todo-app-2vy7.onrender.com";

const getAllTodo = (setTodo) => {
  axios
    .get(basedUrl)
    .then(({ data }) => {
      console.log("data --->", data);
      setTodo(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${basedUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllTodo(setToDo);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${basedUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      console.log(data);
      setText("");
      setIsUpdating(false);
      getAllTodo(setToDo);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${basedUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllTodo(setToDo);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getAllTodo, addToDo, updateToDo, deleteToDo };
