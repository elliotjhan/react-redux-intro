import types from './types';

export function tick() {

    return {
        type: types.TICK,
        payload: new Date().toLocaleTimeString() // payload is the content being delivered, transporting information from one place to another
    } // 

}

export function setTextColor(color) {
    return {
        type: types.SET_TEXT_COLOR,
        color: color
    }
}








