import React from 'react';

import ButtonBuy from "./UI/buttons/ButtonBuy";
const ProductItem = ({...props}) => {

    return (
        <div className='Product'>
            <img src={require('../img/products/'+props.product.imageName)} alt={"description "} />
            <div>
                <div>{props.product.name}</div>
                <h2>{props.product.cost} руб.</h2>
            </div>
            <ButtonBuy
            id = {props.id}
            availability={props.product.availability}/>
        </div>
    );
};

export default ProductItem;