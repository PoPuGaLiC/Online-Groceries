import React from 'react';
import cl from "./ButtonBuy.module.css";

import { useDispatch, useSelector } from 'react-redux'

const ButtonBuy = ({...props}) => {
    const dispatch = useDispatch();
    const busket = useSelector(state => state.busket.busket);
    const product = busket.find(x => x.id === props.id);
    const count = ( product !== undefined) ? product.count + 1  : 1;
    return (
        <button className = {cl.ButtonBuy}
            onClick = {() => {
                dispatch({ type: "CHANGE_BUSKET", payload: {id: props.id, count: count} });
            }}
            disabled = {!props.availability}
        >
            Купить
        </button>
    );
};

export default ButtonBuy;