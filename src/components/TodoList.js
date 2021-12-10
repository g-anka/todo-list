import React from "react";
import TodoItem from "../containers/TodoItem";

export const TodoList = ({ todos }) => {
    return (
        <>
            <h3>My ToDos</h3>
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            </ul>
        </>
    )
};