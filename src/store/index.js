import {createStore, combineReducers} from 'redux'
import {BusketReducer} from './BusketReducer'
import {FilterReducer} from './FilterReducer'

const rootReducer = combineReducers({
    busket: BusketReducer,
    catalog: FilterReducer
})

export const store = createStore(rootReducer)