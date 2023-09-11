import React, {useState} from 'react';

import ButtonBuy from "./UI/buttons/ButtonBuy";
const ProductItem = ({busket, ...props}) => {
    // const [path,setPhoto] = useState()

    return (
        <div className='Product'>
            <img src={require('../img/products/'+props.product.imageName)} alt={"description "} />
            <h1>{props.product.name}</h1>
            <div>{props.product.description}</div>
            <ButtonBuy busket={busket} id = {props.id} availability={props.product.availability}/>
        </div>
    );
};

export default ProductItem;