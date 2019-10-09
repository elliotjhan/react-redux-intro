import { combineReducers } from 'redux';
import clockReducer from './clock_reducer';
import themeReducer from './theme_reducer';
import productsReducer from './products_reducer';

const rootReducer = combineReducers({
    clock: clockReducer,
    products: productsReducer,
    theme: themeReducer
});

export default rootReducer;




// what our state looks like

// state = {
//     clock: {
//         date: 'the date',
//         time: 'the time'
//     },
//      theme: {
//          textColor: 'hotpink'
//     },
//     products: {
//         list: [],
//         details: null
//     }
// }

// whatever the reducer returns, it replaces the entire state
// which is why, the date disappears and only the time updates