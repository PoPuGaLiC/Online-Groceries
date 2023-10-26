import React, {useState} from 'react';
import classes from "./ButtonBuy.module.css";
const ButtonBuy = ({busket, productBusket, ...props}) => {

    const addItem = (e) =>{
        let product = productBusket.find(x=>x.id===props.id)
        if(product){
            busket(props.id,product.count+1)
        }else{
            busket(props.id,1)
        }

    }
    return (
        <button onClick={addItem} disabled={!props.availability} className = {classes.ButtonBuy}>Купить</button>
    );
};

export default ButtonBuy;