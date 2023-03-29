let Todos = { }

if(localStorage.getItem("todos") != null) {
    Todos = JSON.parse(localStorage.getItem("todos"))
}

for(let i = 0; i < Object.keys(Todos).length; i++) {
    const currentTodoUUID = (Object.keys(Todos)[i])
    const currentTodo = (Todos[currentTodoUUID])
    console.log(currentTodo + " is stored in " + currentTodoUUID)
    const todoDiv = document.createElement("div")
    const textNode = document.createTextNode(currentTodo)
    todoDiv.appendChild(textNode)
    document.getElementById("todos").appendChild(todoDiv)
}

function addTodo() {
    const input = document.getElementById("input").value
    const uuid = crypto.randomUUID()
    if(input != "") {
        Todos = Object.assign(Todos, {[uuid]:input})
        localStorage.setItem("todos", JSON.stringify(Todos))
    }
    refresh()
}

function refresh() {
    if(localStorage.getItem("todos") != null) {
        Todos = JSON.parse(localStorage.getItem("todos"))
    }
    for(let i = 0; i < Object.keys(Todos).length; i++) {
        const currentTodoUUID = (Object.keys(Todos)[i])
        const currentTodo = (Todos[currentTodoUUID])
        console.log(currentTodo + " is stored in " + currentTodoUUID)
    }
    window.location.reload()
}

document.onkeypress = function(e) {
  if(document.activeElement.id != "input") {
    document.getElementById("input").value = document.getElementById("input").value + e.key
    document.getElementById("input").focus()
  }
  if(e.key == "Enter") {
    addTodo()
  }
}