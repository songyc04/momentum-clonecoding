const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let ToDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
};

const deleteToDo = (e) => {
  console.log(e);
  const li = e.target.parentElement;

  ToDos = ToDos.filter((todo) => {
    return todo.id !== parseInt(li.id)
  });

  li.remove();

  saveToDos();
};

const paintToDo = (newToDo) => {       // painting ToDo List
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const button = document.createElement("button");

  button.innerText = "✖️";

  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);


  todoList.appendChild(li);
};

const handleToDoSubmit = (e) => {
  e.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";

  const newToDoObj = {
    id: Date.now(),
    text: newToDo
  };

  ToDos.push(newToDoObj);

  paintToDo(newToDoObj);

  saveToDos();
};

todoForm.addEventListener("submit", handleToDoSubmit);

const sayHello = () => {
  console.log("Hello");
};

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  ToDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}