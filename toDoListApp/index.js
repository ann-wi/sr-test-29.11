const form = document.getElementById("form");
const taskInput = document.getElementById("taskInput");
const submitButton = document.getElementById("submitButton");
const tasksSection = document.getElementById("tasksSection");
const tasks = document.getElementById("tasks");

const addTask = (task) => {
  task.preventDefault();

  const inputValue = taskInput.value;

  const newTask = document.createElement("div");
  newTask.className = "tasksElem";
  newTask.innerHTML = `
    <li>${inputValue}</li>
  `;

  tasks.appendChild(newTask);

  taskInput.value = "";
};

form.addEventListener("submit", addTask);
