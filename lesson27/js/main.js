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