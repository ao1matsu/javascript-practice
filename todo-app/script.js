const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);  // ← これ重要
    taskList.appendChild(li);

    li.addEventListener("click", function () {
  li.classList.toggle("completed");

    taskInput.value = "";
});
