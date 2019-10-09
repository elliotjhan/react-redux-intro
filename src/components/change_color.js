import React from 'react';
import {connect} from 'react-redux';
import {setTextColor} from '../actions';
 
const ChangeColor = props => {
    return <button 
            className={props.className} 
            onClick={() => props.setTextColor(props.color)}
            >
                {props.text}
            </button>
}
// object destructuring is also an option below:
// const ChangeColor = ({className, color, text, setTextColor}) => {
//     return <button
//             className={className}
//             onClick={()=>setTextColor(color)}
//             >
//                 {text}
//             </button>
// }

export default connect(null, {
    setTextColor: setTextColor
})(ChangeColor);