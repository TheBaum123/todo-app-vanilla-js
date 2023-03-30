let Todos = { }

if(localStorage.getItem("todos-vanilla-js:todos") != null) {
    Todos = JSON.parse(localStorage.getItem("todos-vanilla-js:todos"))
}

for(let i = 0; i < Object.keys(Todos).length; i++) {
    const currentTodoUUID = (Object.keys(Todos)[i])
    const currentTodo = (Todos[currentTodoUUID])
    console.log(currentTodo + " is stored in " + currentTodoUUID)
    const todoDiv = document.createElement("div")
    const textNode = document.createTextNode(currentTodo)
    const todoText = document.createElement("label")
    const removeButton = document.createElement("button")
    const removeTextNode = document.createTextNode("Remove TODO")
    removeButton.classList.add("remove-button")
    removeButton.setAttribute("id", "remove-" + currentTodoUUID)
    removeButton.setAttribute("onclick", "remove(\"" + currentTodoUUID + "\")")
    removeButton.appendChild(removeTextNode)
    todoText.classList.add("todo-text")
    todoDiv.classList.add("todo-div")
    todoText.appendChild(textNode)
    todoDiv.appendChild(todoText)
    todoDiv.appendChild(removeButton)
    document.getElementById("todos").appendChild(todoDiv)
}

function addTodo() {
    const input = document.getElementById("input").value
    const uuid = crypto.randomUUID()
    if(input != "") {
        Todos = Object.assign(Todos, {[uuid]:input})
        localStorage.setItem("todos-vanilla-js:todos", JSON.stringify(Todos))
    }
    refresh()
}

function refresh() {
    if(localStorage.getItem("todos-vanilla-js:todos") != null) {
        Todos = JSON.parse(localStorage.getItem("todos-vanilla-js:todos"))
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

function remove(uuid) {
    delete Todos[uuid]
    localStorage.setItem("todos-vanilla-js:todos", JSON.stringify(Todos))
    if(Object.keys(Todos).length == 0) {
        clearTodos()
    }
    refresh()
}

function clearTodos() {
    localStorage.removeItem("todos-vanilla-js:todos")
    refresh()
}