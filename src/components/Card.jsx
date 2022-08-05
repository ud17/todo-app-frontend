import React from "react";
import "../styles/Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="box">
                <img src="/images/delete" alt="delete"/>
                <span className="text">Todo Task will go here</span>
            </div>            
        </div>
    );
}

export default Card;