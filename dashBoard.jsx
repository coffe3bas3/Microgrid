import React from "react";
import './style.css';

const style = ({ Icon, temperature, winddirection}) => {
    return (
        <div className = "weatherSqaure">
            <div className = "weatherHeader">
                <span className = "weatherIcon"> {Icon}</span>
                </div>
            <div className = "temperature"> </div>
            <div className = "windDirection"> </div>
            <div className = "details"></div>
        </div>
    );
};

export default style;
