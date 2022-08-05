import React from "react";
import "../styles/Form.css";
import Card from "./Card";

const Form = () => {
    return (
        <div>
            <form className="form-container">
                <input type="input" className="input margin border" placeholder="Todo Task" maxLength={30}/>
                <input type="button" className="button margin border" value="Add Todo" />
            </form>
            <div className="div-container">
                <Card/>
            </div>            
        </div>
    );
}

export default Form;