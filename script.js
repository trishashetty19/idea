function createTaskElement(taskText) {
    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = updateCount;

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.onclick = function() { deleteTask(deleteButton); };
    
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash"; 
    
    
    deleteButton.appendChild(deleteIcon);
    
    
    newTask.appendChild(checkbox);
    newTask.appendChild(span);
    newTask.appendChild(deleteButton);

    return newTask;
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const newTask = createTaskElement(taskText); 
    

    taskList.appendChild(newTask);


    taskInput.value = ""; 
    updateCount(); 
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
    updateCount();
}

function updateCount() {
    const tasks = document.querySelectorAll("#taskList li");
    let completed = 0;
    let incomplete = 0;

    tasks.forEach(task => {
        const checkbox = task.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            completed++;
        } else {
            incomplete++;
        }
    });

    document.getElementById("completedCount").innerText = completed;
    document.getElementById("incompleteCount").innerText = incomplete;
}
updateCount();