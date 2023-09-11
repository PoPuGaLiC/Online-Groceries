import React, {useState} from 'react';
import classes from "./ButtonBuy.module.css";
const ButtonBuy = ({busket, ...props}) => {
    // [basketCount, setCounter] = useState()
    const addItem = (e) =>{
        busket(props.id)
    }
    return (
        <button onClick={addItem} disabled={!props.availability} className = {classes.ButtonBuy}>Купить</button>
    );
};

export default ButtonBuy;