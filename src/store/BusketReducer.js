 
const defaultState={
    busket: [],
    busketCount: 0
}

export const BusketReducer = (state = defaultState, action)=>{
    switch( action.type){
        case "CHANGE_BUSKET":
            const busket_el  = state.busket.find(x => x.id === action.payload.id);
            if( action.payload.count == 0){
                return {...state,
                    busket: [...state.busket.filter(x => x.id !== action.payload.id)],
                    busketCount: [...state.busket.filter(x => x.id !== action.payload.id)].reduce((sum, el)=> sum+el.count, 0)
                }
            }else{
                if( busket_el === undefined){
                    return {...state,
                        busket: [...state.busket, {id:action.payload.id, count: action.payload.count}].sort((a,b)=> a.id>b.id ? -1 : 1),
                        busketCount: state.busketCount+action.payload.count
                    }
                }else{
                    return {...state,
                        busket: [...state.busket.filter(x => x.id !== action.payload.id), {id:  action.payload.id, count: action.payload.count}]
                        .sort((a,b)=> a.id>b.id ? -1 : 1),
                        busketCount: state.busketCount-busket_el.count+action.payload.count
                    }
                }
            }
            
        default:
            return state
    }
    }