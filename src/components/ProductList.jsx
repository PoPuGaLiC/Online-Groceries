import React, {useState} from 'react';
import ProductItem from "./ProductItem";

const ProductList = ({busket, ...props}) => {

    return (
        <div className='ProductList' >
            {props.products.map(product => <ProductItem busket={busket} productBusket = {props.productBusket} key = {product.id} id = {product.id} product = {product}/>)}
        </div>

    );
};

export default ProductList;