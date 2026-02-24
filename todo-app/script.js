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

    li.addEventListener("click", function () {
    li.classList.toggle("completed");
        saveTasks();
});

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        taskList.removeChild(li);
        saveTask();
    });

    li.appendChild(deleteButton);  
    taskList.appendChild(li);

    taskInput.value = "";

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addButton.click();
    }

});
//保存する関数

    function saveTakes() {
    const tasks = [];
    const liElements = document.querySelectorAll("#taskList li");

    liElements.forEach(function (li){
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
        saveTask();


        //ページの読み込み時に復元
         window.addEventListener("load",function(){
        const savedTasks = JSON.parse(this.localStorage.getItem("tasks")) || [];

        savedTasks.forEach(function (task){
            const li = document.createElement("li");
            li.textContent = task.text;

            if(task.completed) {
                li.classList.toggle("completed");
                savedTasks();
        });

        const deleteButton = this.document.createElement("button");
        deleteButton.textContent = "削除";

        deleteButton.addEventListener("click",function(event){
            event.stopPropagation();
            taskList.removeChild(li);
            savedTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

    });
        
}
