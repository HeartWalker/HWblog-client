import {HOME_PAGE} from './actionTypes';
const initialState = {
    pages: {},
};

export default (state = initialState, action) => {
    switch(action.type) {
        case HOME_PAGE:
            return {
                ...state,
                pages: action.pages
            }
        default:
            return state;

    }
}
