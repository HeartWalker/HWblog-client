
import {ARTICLE_DATA} from './actionTypes';
const initialState = {
    data: {},
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ARTICLE_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;

    }
}
