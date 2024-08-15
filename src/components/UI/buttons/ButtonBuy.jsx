import React from 'react';
import cl from "./ButtonBuy.module.css";
const ButtonBuy = ({busket, productBusket, ...props}) => {
    const addItem = (e) =>{
        let product = productBusket.find(x => x.id === props.id)
        if(product){
            busket(props.id, product.count + 1)
        }else{
            busket(props.id, 1)
        }
    }
    return (
        <button className = {cl.ButtonBuy}
            onClick = {addItem}
            disabled = {!props.availability}
        >
            Купить
        </button>
    );
};

export default ButtonBuy;