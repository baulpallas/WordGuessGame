// todo app
// create a js array of todos
var todos = [
  "add some more songs to my spotify playlist",
  "help my students become beasts at DOM manipulation",
  "empower my students to be jQuery ninjas",
  "upload videos to panapto and post them to panapto",
  "upload solutions for w4d2 class activities",
  "prepare for w4d3 lecture"
];
// target elements
var todoListElem = document.querySelector(".todo-list");
var todoItems = document.querySelectorAll(".todo-list > li");
var todoInputElem = document.querySelector("input");
var createTodoButton = document.querySelector("button");
// helper functions
function createTodoItem(todo) {
  var newTodoElem = document.createElement("li");
  newTodoElem.textContent = todo;
  return newTodoElem;
}
// loop through every item in your todo array
// create <li></li> for each todo and append them to your todo list element
for (var i = 0; i < todos.length; i++) {
  var todoItem = createTodoItem(todos[i]);
  todoListElem.appendChild(todoItem);
}

todoInputElem.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    var todoItem = createTodoItem(todoInputElem.value);
    todoListElem.insertBefore(todoItem, todoListElem.firstChild);
    todoInputElem.value = "";
  }
});

todoListElem.addEventListener("click", function(event) {
  event.target.classList.toggle("completed");
  console.log(event);
});
