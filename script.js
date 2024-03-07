var Name = prompt("Enter your name : ");
        var t =  Name +"'s ToDo List" ;
        document.getElementById('title').innerText = t;

const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');
const fliteroption = document.querySelector('.fliter-todo');
const description = document.querySelector('.todo-des');

todobutton.addEventListener('click', addtodo);
function addtodo(event) {
    event.preventDefault();
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    const newtodo1 = document.createElement('li');
    newtodo1.innerText = description.value;
    newtodo1.classList.add('des');
    tododiv.appendChild(newtodo1);
    // saveLocalTodos(todoinput.value);
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    tododiv.appendChild(completedButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    tododiv.appendChild(deleteButton);
    todolist.appendChild(tododiv);
    todoinput.value = "";
    description.value = "";
}

todolist.addEventListener('click', deleteCheck);
function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add('fall');
        // todo.remove();
        todo.addEventListener('transitioned', function () {
            todo.remove();
        });
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
fliteroption.addEventListener('click', filterTodo);
function filterTodo(e) {
    const todos = todolist.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

