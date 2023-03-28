let Todos = { }

if(localStorage.getItem("todos") != null) {
    Todos = JSON.parse(localStorage.getItem("todos"))
    console.log(Todos)
}

for(let i = 0; i < Object.keys(Todos).length; i++) {
    const currentTodoUUID = (Object.keys(Todos)[i])
    const currentTodo = (Todos[currentTodoUUID])
    console.log(currentTodo + " is stored in " + currentTodoUUID)
}

function addTodo() {
    const input = document.getElementById("input").value
    const uuid = crypto.randomUUID()
    Todos = Object.assign(Todos, {[uuid]:input})
    console.log(Todos)
    localStorage.setItem("todos", JSON.stringify(Todos))
}
