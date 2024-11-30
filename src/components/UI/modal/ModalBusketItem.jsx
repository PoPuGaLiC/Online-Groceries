import cl from "./ModalBusketItem.module.css"

import { useDispatch, useSelector } from 'react-redux'
const ModalBusketItem = (props) => {
    const dispatch = useDispatch()
    
    const busket = useSelector(state => state.busket.busket)
    return (
        <div className = {cl.BusketModalItem}>
            <div>
                <img src = {require('../../../img/products/' + props.product.imageName)} alt = {"description"}/>
            </div>
            <div className = {cl.ModalItem}>
                <div>{props.product.name} </div>
                <h1>{(props.product.cost * props.value).toFixed(2)} руб.</h1>
            </div>
            <div className = {cl.ButtonBuy}>
                <button type = "button"
                        onClick = {(e)=>{
                            let currentVal= Number(e.target.nextElementSibling.value)
                            e.target.nextElementSibling.value = currentVal - 1;
                            dispatch({ type: "CHANGE_BUSKET", payload: {id: props.product.id, count:  currentVal-1} });
                        }}>-
                </button>
                <input
                    type = "text"
                    maxLength = {3}
                    value = {props.value}
                    onChange = {e=>{
                        
                        if(e.target.value <= 100){
                            dispatch({ type: "CHANGE_BUSKET", payload: {id: props.product.id, count:  Number(e.target.value)} });
                        }
                    }}
                />
                <button type = "button"
                        onClick = {(e)=>{
                            let currentVal= Number(e.target.previousElementSibling.value);
                            if (currentVal < 100){
                                e.target.previousElementSibling.value = currentVal + 1;
                                
                            dispatch({ type: "CHANGE_BUSKET", payload: {id: props.product.id, count:  currentVal+1} });
                            }}}>+
                </button>
            </div>
        </div>
    );
};

export default ModalBusketItem;