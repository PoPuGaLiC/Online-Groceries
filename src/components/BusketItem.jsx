// import React, {useState} from 'react';

const BusketItem = (props) => {

    return (
        <button onClick = {props.modal}>
            <img  id = "basket" src={require('../img/basket.png')} alt={"description "} />
            {props.busketCount!==0
                ?
                props.busketCount<100
                    ?
                    <div id = "basketCount">{props.busketCount}</div>
                    :
                    <div id = "basketCount">99+</div>
                :
                <div></div>}

        </button>
    );
};

export default BusketItem;