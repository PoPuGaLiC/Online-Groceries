import productsData from "../products.json"
const defaultState = {
    data: productsData,
    filter: {
        sort: 'name-start',
        types: ["fruit","vegetable","milk"],
        search: '',
        price:{
            min: 0,
            max: 150
        }

    }
}

export const FilterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SORT_CATALOG":
            return {...state, filter: {...state.filter, sort: action.payload}};
        case "SELECT_PRODUCT_TYPES":
            return {...state, filter: {...state.filter, types: action.payload}};
        case "SEARCH_PRODUCT_NAME":
            return {...state, filter: {...state.filter, search: action.payload.toLowerCase()}};;
        case "FILTER_PRICE":
            return {...state, filter: {...state.filter, price: {min: action.payload.min, max: action.payload.max}}};;

        default:
            return state
    }
}


// case "SORT_CATALOG":
//             switch (action.payload) {
//                 case 'name-start':
//                     return {...state, data: [...state.data].sort((a, b) => {
//                             return a.name < b.name ? -1 : 1
//                         })};
//                 case 'name-end':
//                     return {...state, data: [...state.data].sort((a, b) => {
//                             return a.name > b.name ? -1 : 1
//                         })};
//                 case 'price-start':
//                     return {...state, data: [...state.data].sort((a, b) => {
//                             return a.cost > b.cost ? -1 : 1
//                         })};
//                 case 'price-end':
//                     return {...state, data: [...state.data].sort((a, b) => {
//                             return a.cost > b.cost ? -1 : 1
//                         })};
//             }
//             case "SELECT_PRODUCT_TYPES":
//                 return {...state, data: [...state.data].filter((el) => {
//                         return action.payload.includes(el.type)
//                     })};
//             case "SEARCH_PRODUCT_NAME":
//                 console.log(action.payload.toLowerCase())
//                 return {...state, data: [...state.data].filter((el) => {
//                         return el.name.toLowerCase().includes(action.payload.toLowerCase())
                        
//                     })};
//         case "FILTER_PRICE":
//             return {...state, data: [...state.data].filter((el) => {
//                     return action.payload.min <el.cost<action.payload.max
//                 })};