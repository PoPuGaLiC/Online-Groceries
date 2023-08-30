import React from 'react';
import ButtonHeader from "./ButtonHeader";
const Header = () => {
    return (
        <div className="Header">
            <img className="Icon" src={require('../img/apple.png')} alt={"description "} />
            <ButtonHeader/>
            <ButtonHeader/>
            <ButtonHeader/>
            <ButtonHeader/>
            <div>
                <input  type="text" size="40"/>
                <button>click</button>
            </div>

        </div>
    );
};

export default Header;