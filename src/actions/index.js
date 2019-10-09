import types from './types';
import axios from 'axios';

export function tick() {

    return {
        type: types.TICK,
        payload: new Date().toLocaleTimeString() // payload is the content being delivered, transporting information from one place to another
    }  

}

export function setTextColor(color) {
    return {
        type: types.SET_TEXT_COLOR,
        color: color
    }
}

export function getProducts() {

    return async function (dispatch) {

        const resp = await axios.get('http://api.sc.lfzprototypes.com/api/products')
        
        dispatch({
            type: types.GET_PRODUCTS,
            products: resp.data.products
        })
    }

}

// export async function getProducts(){

//     const response = await axios.get('http://api.sc.lfzprototypes.com/api/products')

//     console.log('product response', response);
    
//     return {
//         type: 'GET_PRODUCTS',
//         products: resp.data.products
//     }


// }


// export function getProducts(){
//     axios.get('http://api.sc.lfzprototypes.com/api/products').then(response=>{

//         console.log('product response', response);
        
//     })

// }






