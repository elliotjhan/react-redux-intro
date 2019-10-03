import React from 'react';
import {connect} from 'react-redux';
import {setTextColor} from '../actions';
 
const ChangeColor = props => {
    return <button onClick={() => props.setTextColor('blue')}>This is a button</button>
}

export default connect(null, {
    setTextColor: setTextColor
})(ChangeColor);