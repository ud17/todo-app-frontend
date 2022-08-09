import React from "react";
import "../styles/Card.css";

const Card = (props) => {
    
    return (
        <div className="card">
            <div className="box">
                <span className="text">{props.task}</span>
                <img src="/images/edit.png" className="icon" alt="delete"/>
                <img src="/images/delete.png" className="icon" alt="eidt"/>                
            </div> 
        </div>
    );
}

export default Card;