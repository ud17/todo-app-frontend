import React from "react";
import "../styles/Form.css";

const Form = () => {
    return (
        <div>
            <form className="container">
                <input type="input" className="input margin border" placeholder="Title..."/>
                <input type="button" className="button margin border" value="Add" />
            </form>            
        </div>
    );
}

export default Form;