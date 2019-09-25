
export function tick() {

    return {
        type: 'TICK',
        payload: new Date().toLocaleTimeString()
    }

}








