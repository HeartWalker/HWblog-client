import {ARCHIVES_DATA} from './actionTypes';
const initialState = {
    archives: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ARCHIVES_DATA:
            return {
                ...state,
                archives: action.archives
            }
        default:
            return state;

    }
}
