import React from 'react';
import ButtonHeader from "./UI/buttons/ButtonHeader";
const Header = () => {
    return (
        <div className="Header">
            <img className="Icon" src={require('../img/apple.png')} alt={"description "} />
            <ButtonHeader/>
            <ButtonHeader/>
            <ButtonHeader/>
            <ButtonHeader/>
            <div className="search">
                <input type="text" size="40"/>
                <button>click</button>
            </div>

        </div>
    );
};

export default Header;