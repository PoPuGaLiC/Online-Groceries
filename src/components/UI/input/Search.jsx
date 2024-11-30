import React from 'react';
import cl from "./Search.module.css"
import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useMemo, useState} from 'react';

const Search = (props) => {
    const [searchQuery, setSearchQuery] = useState('')
    const dispatch = useDispatch()
    return (
        <div className = {cl.search}>
            <input
                type="text"
                size="40"
                value={searchQuery}
                onChange={e =>{
                    setSearchQuery( e.target.value)
                    dispatch({ type: "SEARCH_PRODUCT_NAME", payload: e.target.value });
                }}
            />
        </div>
    );
};

export default Search;