

import cl from "../styles/BusketModalItem.module.css"
const BusketModalItem = (props) => {
    return (
        <div className={cl.BusketModalItem}>
            <img src={require('../img/products/'+props.product.imageName)} alt={"description "}/>
            <div className={cl.ModalItem}>
                <div>{props.product.name} </div>
                <h1>{(props.product.cost*props.value).toFixed(2)} руб.</h1>
            </div>
            <div className={cl.ButtonBuy}>
                <button  type="button"
                        onClick={(e)=>{
                            e.target.nextElementSibling.value=Number(e.target.nextElementSibling.value)-1;
                            props.changeProductBusket(props.product.id, Number(e.target.nextElementSibling.value))
                        }}>-
                </button>
                <input
                    type="text"
                    maxLength={3}
                    value={props.value}
                    onChange={e =>{
                        if(e.target.value<=100){
                            props.changeProductBusket(props.product.id, Number(e.target.value))
                        }
                    }}
                />
                <button type="button"
                        onClick={(e)=>{
                            if(e.target.previousElementSibling.value<100){
                                e.target.previousElementSibling.value=Number(e.target.previousElementSibling.value)+1;
                                props.changeProductBusket(props.product.id, Number(e.target.previousElementSibling.value))
                            }}}>+
                </button>
            </div>
        </div>
    );
};

export default BusketModalItem;