import types from '../actions/types';

const DEFAULT_STATE = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
}
                                // default parameter: if state is undefined, use default_state


function clockReducer(state = DEFAULT_STATE, action) { // first parameter is the current state whatever the reducer is responsible for  
        
    switch(action.type) { // action is an object
        case types.TICK: // our action tick is being passed in to our reducer
            return { ...state, time: action.payload };   // payload key is being returned from the tick function in actions                          
        default: // ...state keeps our old state and the time gets overwritten
            return state;
    }                                    

}

export default clockReducer;

