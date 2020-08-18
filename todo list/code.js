const todoRemoveButton = document.createElement("i");
todoRemoveButton.classList.add("fa-trash");
const sideBar = document.querySelector("aside");
const main = document.querySelector("main");
const sideBarButton = document.querySelector(".sidebar_button_wrapper");
const addButton = document.querySelector(".fa-plus");
const input = document.querySelector(".todo__name__input");
const todoList = document.querySelector(".todo__list");
const createNewTodo = function (event) {
  var todoName = input.value;
  if (todoName === "") return;
  const todo = document.createElement("li");
  todo.classList.add("todo__item");
  const newTodo = todo.cloneNode(true);
  const todoDoneButton = document.createElement("i");
  const todoRemoveButton = document.createElement("i");
  todo.classList.add("todo__item");
  todoRemoveButton.classList.add("fa-trash");
  todoRemoveButton.classList.add("fas");
  todoDoneButton.classList.add("fa-circle");
  todoDoneButton.classList.add("far");
  newTodo.innerText = todoName;
  newTodo.insertAdjacentElement("afterbegin", todoDoneButton);
  newTodo.appendChild(todoRemoveButton);

  todoList.append(newTodo);
  input.value = "";
};

const deleteOrCheck = function (event) {
    const currentTodo = event.target.parentNode;
  if (event.target.classList[0] === "fa-trash") {
   currentTodo.remove();
  }

  if (event.target.classList[0] === "fa-circle"){
    currentTodo.classList.toggle("completed")
  };
};
todoList.addEventListener("click", deleteOrCheck);
sideBarButton.addEventListener("click", () => {
  sideBar.classList.toggle("collapse");
  main.classList.toggle("expand");
});
addButton.addEventListener("click", createNewTodo);
document.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    if (event.currentTarget.activeElement === input) createNewTodo(event);
  }
});
const projectAddButton = document.querySelector(".project__name__add")