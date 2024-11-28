let form = document.getElementById("form");
let taskInput = document.getElementById("taskInput");
let submitButton = document.getElementById("submitButton");
let tasksSection = document.getElementById("tasksSection");
let tasks = document.getElementById("tasks");

submitButton.onclick = function() {
  console.log("test");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTaskInputValue = form.elements.taskInput;
})
