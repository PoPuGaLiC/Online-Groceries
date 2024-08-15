import React from 'react';
import cl from "./Search.module.css"

const Search = (props) => {
    return (
        <div className = {cl.search}>
            <input
                type="text"
                size="40"
                value={props.searchQuery}
                onChange={e => props.setSearchQuery(e.target.value)}
            />
            <button>Поиск</button>
        </div>
    );
};

export default Search;