import React, {useState} from 'react';

import ButtonBuy from "./UI/buttons/ButtonBuy";
const ProductItem = ({busket, ...props}) => {
    // const [path,setPhoto] = useState()

    return (
        <div className='Product'>
            <img src={require('../img/products/'+props.product.imageName)} alt={"description "} />
            <div>
                <div>{props.product.name}</div>
                <h1>{props.product.cost} руб.</h1>
                    {/*<h1>{props.product.name}</h1>*/}
                    {/*<div>{props.product.cost} руб.</div>*/}
            </div>
            <ButtonBuy busket={busket} productBusket = {props.productBusket} id = {props.id} availability={props.product.availability}/>
        </div>
    );
};

export default ProductItem;