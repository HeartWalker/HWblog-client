import axios from 'axios';
import {ARTICLE_DATA} from './actionTypes';

export function data(data) {
    return (dispatch) => {
        axios.get('/api/test')
            .then(function (response) {
                console.log(response)
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

