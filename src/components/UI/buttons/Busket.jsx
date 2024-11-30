import "./Busket.css"
import {useSelector} from 'react-redux'
const Busket = (props) => {
    
    const busketCount = useSelector(state => state.busket.busketCount)
    return (
        <button onClick = {props.modal}>
            <img id = "basket" src = {require('../../../img/basket.png')} alt={"description "} />
            {(busketCount !== 0)
                ?
                (busketCount < 100)
                    ?
                    <div id = "basketCount">{busketCount}</div>
                    :
                    <div id = "basketCount">99+</div>
                :
                <></>}
        </button>
    );
};

export default Busket;