import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
const Types = (props) => {

    const dispatch = useDispatch()
    const types = useSelector(state => state.catalog.filter.types)
    return (
        <div>
            {types.includes('fruit') ?
                <input type="checkbox"
                    id="fruit"
                    onChange={event=> dispatch({ type: "SELECT_PRODUCT_TYPES", payload: [...types.filter(el=>el!='fruit')]})}
                    checked />
                :
                <input type="checkbox"
                    id="fruit"
                    onChange={event=> dispatch({ type: "SELECT_PRODUCT_TYPES", payload: [...types, 'fruit']})}
                />}

            <label htmlFor="fruit">Фрукты</label>
            {types.includes('vegetable') ?
                <input type="checkbox"
                    id="vegetable"
                    onChange={event=> dispatch({ type: "SELECT_PRODUCT_TYPES", payload: [...types.filter(el=>el!='vegetable')]})}
                    checked />
                :
                <input type="checkbox"
                    id="vegetable"
                    onChange={event=> dispatch({ type: "SELECT_PRODUCT_TYPES", payload: [...types, 'vegetable']})}
                />}
            
            <label htmlFor="vegetable">Овощи</label>
            {types.includes('milk') ?
                <input type="checkbox"
                    id="milk"
                    onChange={event=> dispatch({ type: "SELECT_PRODUCT_TYPES", payload: [...types.filter(el=>el!='milk')]})}
                    checked />
                :
                <input type="checkbox"
                    id="milk"
                    onChange={event=> dispatch({ type: "SELECT_PRODUCT_TYPES", payload: [...types, 'milk']})}
                />}
         
            <label htmlFor="milk">Молоко</label>
        </div>
    );
};

export default Types;