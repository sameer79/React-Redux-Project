import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as ActionCreactor from '../../actions/actionsConstants';

class ValueChange extends Component {
    constructor(props){
        super();
        this.state = {
            val: 0
        };
    }

    inputChange = (event) => {
        this.setState({val: event.target.value});
    }

    render() {
        const {val} = this.state;
        const {ctrValue, triggerValueChanger} = this.props;
        return (
            <div>
                <h2>Counter value: {ctrValue}</h2>
                <p>I'll add the value to counter from here!!</p>
                <input ref={(ref) => this.inputRef = ref} type="number" value={val} min={0}  onChange={this.inputChange} />
                <button onClick={() => triggerValueChanger(val)}>Change Counter Value</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctrValue: state.ctrReducer.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        triggerValueChanger: (v) => dispatch(ActionCreactor.add(Number(v)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ValueChange);