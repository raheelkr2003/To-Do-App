
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var task = document.createElement("li");
      task.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${taskInput.value}</span>
        <button class="delete-button" onclick="deleteTask(this.parentElement)">Delete</button>
      `;
      taskList.appendChild(task);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  
  function deleteTask(task) {
    task.parentElement.removeChild(task);
  }
  
