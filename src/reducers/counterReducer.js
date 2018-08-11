import { ActionConstants } from '../actions/actionsConstants';

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {

    switch(action.type){
        case ActionConstants.INCREMENT: state = {
            ...state,
            counter: state.counter + 1
        };
        break;
        case ActionConstants.DECREMENT: state = {
            ...state,
            counter: state.counter - 1
        };
        break;
        case ActionConstants.ADD: state = {
            ...state,
            counter: state.counter += action.payload
        };
        break;
        case ActionConstants.SUBTRACT: state = {
            ...state,
            counter: state.counter - action.payload
        };
        break;
    };

    return state;
};

export default counterReducer;