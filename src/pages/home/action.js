import axios from 'axios';
import {HOME_PAGE} from './actionTypes';

export function getPage(num) {

    return (dispatch) => {
        let api = `/api/page/${num}`;
        axios.get(api)
            .then(function (response) {
                console.log(response);
                dispatch({
                    'type': HOME_PAGE,
                    'pages': response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

}
