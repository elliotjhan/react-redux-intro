import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick } from './../actions';

class Clock extends Component {

    componentDidMount() {
        setInterval(this.props.tick, 1000);
    }

    render() {

        return(
            <div>
                <h1>{this.props.time}</h1>
                <h2>{this.props.date}</h2>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        date: state.clock.date,
        time: state.clock.time
    };
}

export default connect(mapStateToProps, { tick: tick })(Clock);
