import React from 'react';
import cl from "./ModalBusket.module.css"
import BusketModalItem from "../../BusketModalItem";
const ModalBusket = ({visible,setVisible, ...props}) => {
    const rootClasses =[cl.ModalBusket]
    if(visible){
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(" ")}  onClick={() => setVisible(false)}>
            <div className={cl.ModalBusketContent} onClick={(e) => e.stopPropagation()}>
                <div>
                    {props.productBusket.length > 0
                        ? <div>
                            <h1>Корзина</h1>
                            <div>
                                {props.productBusket.map(productItem => {
                                    return <BusketModalItem
                                        key = {productItem.id}
                                        product = {props.products.find(x=>x.id===productItem.id)}
                                        value={productItem.count}
                                        productBusket = {props.productBusket}
                                        changeProductBusket = {props.changeProductBusket}
                                    />;})}
                            </div>
                            <h1>Общая сумма заказа: {props.productBusket.reduce((sum,x)=>{
                                return sum+x.count*props.products.find(p=>p.id===x.id).cost
                            },0).toFixed(2)} руб.</h1>
                        </div>
                        : <div>
                            <h1>Корзина пуста</h1>
                            <div style={{padding:"100px"}}>Добавьте хотя бы один товар в корзину</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ModalBusket;