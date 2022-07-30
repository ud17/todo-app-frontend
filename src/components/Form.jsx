import React from "react";
import "../styles/Form.css";

const Button = () => {
    return (
        <div>
            <form className="container">
                <input type="input" className="ipt margin border"/>
                <input type="button" className="btn margin border" value="Add" />
            </form>            
        </div>
    )
}

export default Button;