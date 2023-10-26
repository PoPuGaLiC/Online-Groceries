import React, {useState} from 'react';
import ButtonHeader from "./UI/buttons/ButtonHeader";
import "../styles/Header.css"
const Header = (props) => {

    return (
        <div className="Header">
            <img className="Icon" src={require('../img/apple.png')} alt={"description "} />
            <div className="buttons">
                {props.pages.map(button=> {return <ButtonHeader key = {button.id} name = {button.name} active = {button.active}/>})}
            </div>
        </div>
    );
};

export default Header;