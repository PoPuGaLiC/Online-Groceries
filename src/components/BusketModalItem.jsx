
import React, {useState} from 'react';
const BusketModalItem = (props) => {
    return (
        <div className="BusketModalItem">
            <img src={require('../img/products/'+props.imageName)} alt={"description "} />
            <h1>{props.name} {props.value} </h1>
        </div>
    );
};

export default BusketModalItem;