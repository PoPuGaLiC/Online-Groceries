import React from 'react';
import "./Range.css"
import { useDispatch, useSelector } from 'react-redux'
const Range = (props) => {
    const priceRange= {min:0,max:150}
    const dispatch = useDispatch()
    const price = useSelector(state => state.catalog.filter.price)
    
    function changeRangeInput(e,rs, ri1,ri2){
        let minRange = parseInt(ri1);
        let maxRange = parseInt(ri2);
        if (minRange<priceRange.min){
            minRange=priceRange.min
        }

        if (minRange>priceRange.max){
            minRange=priceRange.max
            maxRange=priceRange.max
        }
        if (minRange<priceRange.min){
            minRange=priceRange.min
            maxRange=priceRange.min
        }
        if (maxRange>priceRange.max){
            maxRange=priceRange.max
        }
        if (maxRange - minRange < 0) {
            if (e.target.className === "min") {
                ri1= maxRange - 0;
            } else {
                ri2= minRange + 0;
            }
        } else {
            ri1 = minRange;
            ri2 = maxRange;
            rs.style.left = (minRange / priceRange.max) * 100 + "%";
            rs.style.right = 100 - (maxRange / priceRange.max) * 100 + "%";
        }
        dispatch({ type: "FILTER_PRICE", payload: {min:ri1,max:ri2}})

    }



    return (
        <div class="Range">
            <div className="RangeSlider">
                <span id="RangeSelected"></span>
            </div>
            <div className="RangeInput">
                <input
                    type="range"
                    className="min"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={price.min}
                    step="1"
                    onChange={e => changeRangeInput(e,document.getElementById('RangeSelected'), e.target.value, e.target.nextElementSibling.value)}
                >
                </input>
                <input
                    type="range"
                    className="max"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={price.max}
                    step="1"
                    onInput={e => changeRangeInput(e,document.getElementById('RangeSelected'),  e.target.previousElementSibling.value, e.target.value)}
                >
                </input>
            </div>
            <div className="RangePrice">
                <label htmlFor="min">Мин.</label>
                <input
                    type="number"
                    name="min"
                    value={price.min}
                    onChange={e => changeRangeInput(e,document.getElementById('RangeSelected'), e.target.value, e.target.nextElementSibling.nextElementSibling.value)}
                >
                </input>
                <label htmlFor="max">Макс.</label>
                <input
                    type="number"
                    name="max"
                    value={price.max}
                    onChange={e => changeRangeInput(e,document.getElementById('RangeSelected'),  e.target.previousElementSibling.previousElementSibling.value, e.target.value)}
                >
                </input>
            </div>
        </div>
    );
};

export default Range;