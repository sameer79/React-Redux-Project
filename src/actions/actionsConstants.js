export const ActionConstants = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT',
    RESULTS: 'RESULTS',
    RESULTS_DELETE: 'RESULTS_DELETE'

};

const addCounter = () => {
    return {
        type: ActionConstants.INCREMENT
    };
};

export const increment = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addCounter());
        },2000);
    };
};

export const decrement = () => {
    return {
        type: ActionConstants.DECREMENT
    };
};

const addVal = (val) => {
    return {
        type: ActionConstants.ADD,
        payload: val
    };
};

export const add = (val) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log(getState());
            dispatch(addVal(val));
        },2000);
    };
};

export const subtract = (val) => {
    return {
        type: ActionConstants.SUBTRACT,
        payload: val
    };
};

export const storeResults = (res) => {
    return {
        type: ActionConstants.RESULTS,
        result: res
    };
};

export const deleteStoreResults = (index) => {
    return {
        type: ActionConstants.RESULTS_DELETE,
        elIndex: index
    };
};