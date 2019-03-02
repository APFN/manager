import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCESS
} from '../actions/types';
const INITIAL_STATE = {
    // name: '',
    // phone: '',
    // shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCESS:
            console.log(action);
            return action.payload;    
        default:
            return state;
    }
};