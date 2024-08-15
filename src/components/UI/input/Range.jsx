import React from 'react';
import "./Range.css"
const Range = (props) => {
    function changeRangeInput(e,rs, ri1,ri2){
        let rangeMin = 0;
        let minRange = parseInt(ri1);
        let maxRange = parseInt(ri2);
        if (minRange<0){
            minRange=0
        }

        if (minRange>100){
            minRange=100
            maxRange=100
        }
        if (minRange<0){
            minRange=0
            maxRange=0
        }
        if (maxRange>100){
            maxRange=100
        }
        if (maxRange - minRange < rangeMin) {
            if (e.target.className === "min") {
                ri1= maxRange - rangeMin;
            } else {
                ri2= minRange + rangeMin;
            }
        } else {
            ri1 = minRange;
            ri2 = maxRange;
            rs.style.left = (minRange / 100) * 100 + "%";
            rs.style.right = 100 - (maxRange / 100) * 100 + "%";
        }

        props.setMinCost(ri1)
        props.setMaxCost(ri2)
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
                    min="0"
                    max="100"
                    value={props.minCost}
                    step="1"
                    onChange={e => changeRangeInput(e,document.getElementById('RangeSelected'), e.target.value, e.target.nextElementSibling.value)}
                >
                </input>
                <input
                    type="range"
                    className="max"
                    min="0"
                    max="100"
                    value={props.maxCost}
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
                    value={props.minCost}
                    onChange={e => changeRangeInput(e,document.getElementById('RangeSelected'), e.target.value, e.target.nextElementSibling.nextElementSibling.value)}
                >
                </input>
                <label htmlFor="max">Макс.</label>
                <input
                    type="number"
                    name="max"
                    value={props.maxCost}
                    onChange={e => changeRangeInput(e,document.getElementById('RangeSelected'),  e.target.previousElementSibling.previousElementSibling.value, e.target.value)}
                >
                </input>
            </div>
        </div>
    );
};

export default Range;