import axios from 'axios';
import {ARTICLE_DATA} from './actionTypes';

export function data(data) {
    return (dispatch) => {
        let api = `/api/archive/${data}`;
        axios.get(api)
            .then(function (response) {
                //console.log(response)
                dispatch({
                    'type': ARTICLE_DATA,
                    'data': response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

}

