import React from 'react';
import cl from "./ModalBusket.module.css"
import ModalBusketItem from "./ModalBusketItem";
import { useSelector } from 'react-redux'
const ModalBusket = ({visible,setVisible, ...props}) => {
    
    const products = useSelector(state => state.catalog.data)
    const busket = useSelector(state => state.busket.busket)
    const busketCount = useSelector(state => state.busket.busketCount)

    const rootClasses =[cl.ModalBusket]
    if (visible){
        rootClasses.push(cl.active)
    }

    if (busketCount === 0){
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
                    {busket.map(productItem => {
                        return <ModalBusketItem
                            key = {productItem.id}
                            product = {products.find(x=>x.id===productItem.id)}
                            value={productItem.count}
                        />;})}
                </div>
                <h1>Общая сумма заказа: {busket.reduce((sum,x)=>{
                    return sum+x.count*products.find(p=>p.id===x.id).cost
                },0).toFixed(2)} руб.</h1>
            </div>
        </div>
    );
};

export default ModalBusket;