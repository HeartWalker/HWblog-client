
import {TEST_TODO} from './actionTypes';

export function test(data) {
    return {
        'type': TEST_TODO,
        'data': data,
    }
}
