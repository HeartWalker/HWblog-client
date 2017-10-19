
import axios from 'axios';
import {ARCHIVES_DATA} from './actionTypes';

export function getArchives(data) {
    return (dispatch) => {
        axios.get('/api/archives')
            .then(function (response) {
                //console.log(response)
                dispatch({
                    'type': ARCHIVES_DATA,
                    'archives': response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

}