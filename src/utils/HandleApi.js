import axios from "axios";
// http://localhost:10000

const basedUrl = "https://fullstack-todo-app-2vy7.onrender.com";

const getAllTodo = (setTodo) => {
  axios
    .get(`${basedUrl}/api/todos`)
    .then(({ data }) => {
      console.log("data --->");
      setTodo(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${basedUrl}/api/todos/save`, { text })
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
    .post(`${basedUrl}/api/todos/update`, { _id: toDoId, text })
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
    .post(`${basedUrl}/api/todos/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllTodo(setToDo);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getAllTodo, addToDo, updateToDo, deleteToDo };
