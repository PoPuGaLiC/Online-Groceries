import React, {useState} from 'react';
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState([
        {id:1, name: "cat", description: "CAT"},
        {id:2, name: "cafesdt", description: "CAGGGGGGGGGT"},
        {id:3, name: "csfddat", description: "CADDDDDDDDT"},
        {id:4, name: "cafesdt", description: "CAGGGGGGGGGT"},
        {id:5, name: "csfddat", description: "CADDDDDDDDT"},
        {id:6, name: "cafesdt", description: "CAGGGGGGGGGT"},
        {id:7, name: "csfddat", description: "CADDDDDDDDT"},
    ])

    return (
        <div className='ProductList' >
            {products.map(product => <ProductItem key = {product.id} product = {product}/>)}
        </div>

    );
};

export default ProductList;