import React, {useState} from "react";

export const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState("");
    const onAddButtonClick = () => {
        addTodo(text);
        setText("");
    };

    const onInputChange = event => {
        setText(event.target.value)
    };

    return (
        <>
            <input type="text" placeholder="Enter text here" value={text} onChange={onInputChange}/>
            <button type="button" onClick={onAddButtonClick} >Add ToDo</button>
        </>
    )
};