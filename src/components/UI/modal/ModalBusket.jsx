import React from 'react';
import cl from "./ModalBusket.module.css"
const ModalBusket = ({children,visible,setVisible}) => {
    const rootClasses =[cl.ModalBusket]
    if(visible){
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(" ")}  onClick={() => setVisible(false)}>
            <div className={cl.ModalBusketContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalBusket;