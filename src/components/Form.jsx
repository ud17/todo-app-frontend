import React from "react";
import "../styles/Form.css";
import Card from "./Card";

// import react hooks
import { useState } from "react";

const Form = () => {

    const [text, setText] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        text.push(input);
        setText(text);
        setInput("");
    }

    const setValue = (event) => {
        setInput(event.target.value);
    }

    return (
        <div>
            <form className="form-container">
                <input type="input" className="input margin border" onChange={setValue} placeholder="Todo Task" maxLength={30}/>
                <input type="button" className="button margin border" value="Add Todo" onClick={addTodo} />
            </form>
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