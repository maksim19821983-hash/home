"use strict"

const TodoKeys = {
    id: "id",
    text: "text",
    isCompleted: "isCompleted",
}
const todos =[];

const errTodoNotFound = todoId => `Todo with id ${todoId} is not found`;


const GetNewTodoId = todos => {
    return (
        todos.reduce((maxId,todo) => {
        return  Math.max(maxId,todo[TodoKeys.id])
    },0) + 1
)
}
const createTodo = (todos,text) => {
    const newTodo = {
        [TodoKeys.id]: GetNewTodoId(todos),
        [TodoKeys.text]: text,
        [TodoKeys.isCompleted]: false,
    }
    todos.push(newTodo);
    return newTodo;
}

const completedTodoById = (todos,todoId) => {
    const todo = todos.find(todo => todo[TodoKeys.id] === todoId);
    if(!todo) {
        console.error(errTodoNotFound(todoId));
        return undefined;
    } else {
        todo[TodoKeys.isCompleted] = !todo[TodoKeys.isCompleted];
    return todo;
    }
}

const deleteTodoById = (todos,todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[TodoKeys.id] === todoId);
    if(todoIndex === -1) {
        console.error(errTodoNotFound(todoId));
        return todos;
    }
    todos.splice(todoIndex,1);
    return todos;
}

//Задача 1
const form = document.querySelector(".form");
console.log(form)

const input = document.querySelector(".input");
console.log(input);

const todosHTML = document.querySelector(".todos");
console.log(todosHTML);

//Задача 2

function CreateTodoElement (text) {
    const todoElement = document.createElement("li");
    todoElement.classList.add("todo");
    todoElement.innerHTML = `
    <div class="todo-text">${text}</div>
        <div class="todo-actions">
            <button class="button-complete button">&#10004</button>
            <button class="button-delete button">&#10006</button>
    </div>`
    return todoElement;
}

//Задача 3

const handleCreateTodo = (todos,text) => {
    const todo = createTodo(todos,text);
    const todoElement = CreateTodoElement(text);
    todosHTML.append(todoElement);

}

