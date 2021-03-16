var form = document.getElementById("form");
var input = document.getElementById("input");
var todo = document.getElementById("todo");
var todoList = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log("Hello!!");
    addTodo();
})

function addTodo() {
    var newTodo = input.value; //get input
    console.log(newTodo);

    if (!newTodo) return;

    todoList.push({
        text: newTodo,
        complete: false
    })

    console.log(todoList);
    input.value = "";
    render();
}

function render() {
    todo.innerHTML = null;
    for (let i = 0; i < todoList.length; i++) {
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.addEventListener("click", function (e) {
            todoList[i].complete = e.target.checked;
            if (todoList[i].complete) {
                // console.log("completed");
                item.classList.add("completed");
                item.classList.remove("uncompleted");
            }
            else {
                // console.log("uncompleted");
                item.classList.add("uncompleted");
                item.classList.remove("completed");
            }
        })

        const text = document.createElement("p");
        text.innerText = todoList[i].text;

        const button = document.createElement("button");
        button.innerText = "-";

        button.addEventListener("click", function (e) {
            console.log("delete");
            todoList.splice(i, 1);
            console.log(todoList);
            render();

        })

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);

        todo.appendChild(item);

    }
}