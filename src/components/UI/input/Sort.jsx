import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
const Sort = (props) => {

    const dispatch = useDispatch()
    const filterID = useSelector(state => state.catalog.filter.sort)
    return (
        <div>
            <select
              value={filterID}
              onChange={(event) => {
                  dispatch({ type: "SORT_CATALOG", payload: event.target.value });
              }}>
                <option value={'name-start'}>Алфавит (А-Я)</option>
                <option value={'name-end'}>Алфавит (Я-А)</option>
                <option value={'price-start'}>Цена по возрастанию</option>
                <option value={'price-end'}>Цена по убыванию</option>
            </select>
        </div>
    );
};

export default Sort;