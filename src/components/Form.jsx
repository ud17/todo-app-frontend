import React from "react";
import "../styles/Form.css";
import Card from "./Card";

// import react hooks
import { useState, useRef } from "react";

const Form = () => {

    const [text, setText] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const inputRef = useRef(null);

    const addTodo = () => {
        if(input.length < 4) {
            setError("Task title should be 4-30 characters long.");
            return;
        }
        text.push(input);
        setText(text);
        setInput("");
        onSubmit();
    }

    const setValue = (event) => {
        setInput(event.target.value);
        setError("");
    }

    const onSubmit = () => {
        inputRef.current.value = "";
        inputRef.current.blur();
    }

    return (
        <div>
            <form className="form-container">
                <input type="input" className="input margin border" onChange={setValue} ref={inputRef} placeholder="Todo Task" maxLength={30} minLength={4}/>
                <input type="button" className="button margin border" value="Add Todo" onClick={addTodo} />
            </form>
            <label className="error">{error}</label>
            <div className="div-container">
                {
                    text.map((item) => (
                        <Card task={item}/>
                    ))
                }
            </div>            
        </div>
    );
}

export default Form;