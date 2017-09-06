import {TEST_TODO} from './actionTypes';

const initialState = {
    test: 1,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case TEST_TODO:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;

    }
}
