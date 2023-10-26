import React from 'react';
import cl from "./Search.module.css"
const Search = () => {
    return (
        <div className={cl.search}>
            <input
                type="text"
                size="40"
            />
            <button>Поиск</button>
        </div>
    );
};

export default Search;