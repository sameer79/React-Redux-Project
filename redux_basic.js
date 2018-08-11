const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
};

const reducers = (state = initialState, action) => {
    switch(action.type){
        case 'INC_COUNTER': state = {...state, counter: state.counter + action.payload}
        break;
        case 'DEC_COUNTER': state = {...state, counter: state.counter - action.payload}
        break;
        case 'INC_COUNTER_5':
        break;
        case 'SUB_COUNTER_5':
        break;
    };
    
    return state;
};

const store = createStore(reducers);

console.log(store.getState());

store.dispatch({
    type: "INC_COUNTER",
    payload: 1
});
console.log(store.getState());
store.dispatch({
    type: "INC_COUNTER",
    payload: 1
});
console.log(store.getState());
store.dispatch({
    type: "INC_COUNTER",
    payload: 1
});
console.log(store.getState());
store.dispatch({
    type: "DEC_COUNTER",
    payload: 1
});

console.log(store.getState());