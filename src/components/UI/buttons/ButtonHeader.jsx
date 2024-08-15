import React from 'react';
import cl from "./ButtonHeader.module.css"

const ButtonHeader = (props) => {
    const rootClasses =[cl.ButtonHeader]
    if(props.active){
        rootClasses.push(cl.active)
    }
    return (
        <button className = {rootClasses.join(" ")}>
            {props.name}
        </button>
    );
};

export default ButtonHeader;