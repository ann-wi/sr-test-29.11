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

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "doneButton");
  deleteButton.setAttribute("type", "button");
  deleteButton.innerText = "x";

  tasks.appendChild(newTask);
  newTask.appendChild(deleteButton);

  taskInput.value = "";
  completeTask(newTask);
  removeTask(deleteButton);
};

const completeTask = (task) => {
  task.addEventListener("click", (e) => {
    const completeTask = e.target;
    
    completeTask.classList.add("taskCompleted");
    }
  );  
}

const removeTask = (btn) => {
  btn.addEventListener("click", (e) => {
    const removedTask = e.target;
    removedTask.parentElement.remove();
    }
  ); 
}

form.addEventListener("submit", addTask);
