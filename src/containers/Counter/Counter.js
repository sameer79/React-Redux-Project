import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';

import ValueChanger from '../ValueChangerComponent/valueChanger';
import * as ActionCreator from '../../actions/actionsConstants';

class Counter extends Component {

    render () {
        const {ctr, onIncrementCounter, onDecrementCounter, onAddCounter, onSubtractCounter, onResults, results, deleteResultsItem} = this.props;
        return (
            <div>
                <CounterOutput value={ctr} />
                <CounterControl label="Increment" clicked={onIncrementCounter} />
                <CounterControl label="Decrement" clicked={onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={onSubtractCounter}  />
                <hr />
                <button onClick={() => onResults(ctr)}>Result</button>
                <ul className="list-group">
                {
                    results.length > 0
                    ? results.map((r, i) => {
                        return <li className="list-group-item" key={i} onClick={() => deleteResultsItem(i)} >{r}</li>;
                    })
                    : null
                }
                </ul>
                <ValueChanger />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctrReducer.counter,
        results: state.resReducer.results
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(ActionCreator.increment()),
        onDecrementCounter: () => dispatch(ActionCreator.decrement()),
        onAddCounter: () => dispatch(ActionCreator.add(5)),
        onSubtractCounter: () => dispatch(ActionCreator.subtract(5)),
        onResults: (val) => dispatch(ActionCreator.storeResults(val)),
        deleteResultsItem: (index) => dispatch(ActionCreator.deleteStoreResults(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);