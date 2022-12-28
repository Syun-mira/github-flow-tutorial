const input = document.getElementById("input");
const addTodo = document.getElementById("addTodo");
const ul = document.getElementById("todoList");


addTodo.addEventListener("click", function() {  
    let toDo = input.value;
    const li = document.createElement('li');
    li.innerHTML = toDo;
    ul.appendChild(li);
    input.value = "";
    
})