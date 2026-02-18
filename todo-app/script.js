const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click",function(){
    const taskText = taskInput.value;

    if(taskText === ""){
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.append(li);

    taskInput.Value = "";
});
