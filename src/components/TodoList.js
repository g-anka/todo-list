import React from "react";
import TodoItem from "../containers/TodoItem";

export const TodoList = ({ todos, showCompleted }) => {
    const visibleTodos = showCompleted ? todos : todos.filter(todo => !todo.completed);
console.log()
    return (
        <>
            <h3>My ToDos</h3>
            <ul>
                {visibleTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            </ul>
        </>
    )
};