import { ActionConstants } from '../actions/actionsConstants';

const initialState = {
    results: []
};

const resultsReducer = (state = initialState, action) => {

    switch(action.type){
        case ActionConstants.RESULTS: state = {
            ...state,
            results: [...state.results, action.result]
        };
        break;
        case ActionConstants.RESULTS_DELETE:
            const updateArray = state.results.filter((res, i) => i !== action.elIndex);
            state = {
                ...state,
                results: updateArray
            };
        break;
    };

    return state;
};

export default resultsReducer;