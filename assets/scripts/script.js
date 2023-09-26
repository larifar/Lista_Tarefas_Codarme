const addTaskBtn = document.getElementById("new-task-btn");
const board = document.querySelector(".board")
const tasks = document.querySelectorAll(".board-task");

addTaskBtn.addEventListener("click", ()=> {
    createTask()
})

board.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-img")) {
        // Verifica se o elemento clicado possui a classe "remove-img"
        const taskDiv = event.target.parentNode; // Obtém a div da tarefa
        taskDiv.remove(); // Remove a tarefa específica
    } else if(event.target.classList.contains("complete-img")){
        const taskImgToDo = event.target;
        changeTaskCheck(taskImgToDo);
    }
});


function createTask(){
    let taskValue = document.getElementById("new-task").value;
    var div = document.createElement('div');
    div.classList.add("board-task");
    board.appendChild(div);
    div.innerHTML += `
        <div>
            <img src="./assets/imgs/Frame.svg" alt="" class="complete-img">
            <p class="task-description">${taskValue}</p>
        </div>
        <img src="./assets/imgs/remove.svg" alt="" class="remove-img">
    `;
}

function changeTaskCheck(target){
    const p = target.nextSibling.nextSibling;
    if(target.getAttribute("src")=="./assets/imgs/Frame.svg"){
        target.setAttribute("src", "./assets/imgs/check.svg");
        p.classList.add("line-text");
    } else if(target.getAttribute("src")=="./assets/imgs/check.svg"){
        target.setAttribute("src", "./assets/imgs/Frame.svg");
        p.classList.remove("line-text");
    }
}


