
const DEFAULT_STATE = {
    time: new Date().toLocaleTimeString()
}
                                // default parameter: if state is undefined, use default_state


function clockReducer(state = DEFAULT_STATE, action) { // first parameter is the current state whatever the reducer is responsible for  
    switch(action.type) { // action is an object
        case 'TICK':
            return { time: new Date().toLocaleTimeString() };                             
        default:
            return state;
    }                                    

}

export default clockReducer;

