import React from 'react';
import cl from "./ModalBusket.module.css"
import ModalBusketItem from "./ModalBusketItem";
const ModalBusket = ({visible,setVisible, ...props}) => {
    const rootClasses =[cl.ModalBusket]
    if (visible){
        rootClasses.push(cl.active)
    }

    if (props.productBusket.length === 0){
        return (
            <div className={rootClasses.join(" ")}
                 onClick={() => setVisible(false)}
            >
                <div className={cl.ModalBusketContent}
                     onClick={(e) => e.stopPropagation()}
                >
                    <h1>Корзина пуста</h1>
                    <div className={cl.description}>Добавьте хотя бы один товар в корзину</div>
                </div>
            </div>
        )
    }

    return (
        <div className={rootClasses.join(" ")}
             onClick={() => setVisible(false)}
        >
            <div className={cl.ModalBusketContent}
                 onClick={(e) => e.stopPropagation()}
            >
                <h1>Корзина</h1>
                <div>
                    {props.productBusket.map(productItem => {
                        return <ModalBusketItem
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
        </div>
    );
};

export default ModalBusket;