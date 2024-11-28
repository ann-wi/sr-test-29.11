const form = document.getElementById("form");
const taskInput = document.getElementById("taskInput");
const submitButton = document.getElementById("submitButton");
const tasksSection = document.getElementById("tasksSection");
const tasks = document.getElementById("tasks");

const addTask = (task) => {
  task.preventDefault();

  const inputValue = taskInput.value;

  const newTask = document.createElement("li");
  newTask.setAttribute("class", "tasksElem");
  newTask.innerText = inputValue;

  const doneButton = document.createElement("button");
  doneButton.setAttribute("class", "doneButton");
  doneButton.setAttribute("type", "button");
  doneButton.innerText = "x";

  tasks.appendChild(newTask);
  newTask.appendChild(doneButton);

  taskInput.value = "";
};

/*
const completeTask = (e) => {
  const task = e.target;
  
}
*/

form.addEventListener("submit", addTask);
