const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// ===== タスク追加 =====
addButton.addEventListener("click", function () {
    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    createTask(taskText, false);
    taskInput.value = "";
    saveTasks();
});

// ===== Enterキー対応 =====
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.isComposing) {
        addButton.click();
    }
});

// ===== タスクを作る関数 =====
function createTask(text, completed) {
    const li = document.createElement("li");
    li.textContent = text;

    if (completed) {
        li.classList.add("completed");
    }

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        saveTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        taskList.removeChild(li);
        saveTasks();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

// ===== 保存する関数 =====
function saveTasks() {
    const tasks = [];
    const liElements = document.querySelectorAll("#taskList li");

    liElements.forEach(function (li) {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ===== 読み込み時に復元 =====
window.addEventListener("load", function () {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(function (task) {
        createTask(task.text, task.completed);
    });
});
