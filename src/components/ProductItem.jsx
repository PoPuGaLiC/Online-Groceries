import React, {useState} from 'react';

import ButtonBuy from "./ButtonBuy";
const ProductItem = (props) => {
    // const [path,setPhoto] = useState()
    console.log(props)
    return (
        <div className='Product'>
            <img src={require('../img/cat.jpg')} alt={"description "} />
            <div>{props.product.name}</div>
            <div>{props.product.description}</div>
            <ButtonBuy/>
        </div>
    );
};

export default ProductItem;