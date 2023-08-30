import React, {useState} from 'react';

const BusketItem = () => {
    const [busketCount,setCount] = useState(0)
    function increment(){
        setCount(busketCount+1)
    }
    return (
        <div>
            <img onClick={increment} id = "basket" src={require('../img/basket.png')} alt={"description "} />
            <div id = "basketCount">{busketCount}</div>
        </div>
    );
};

export default BusketItem;