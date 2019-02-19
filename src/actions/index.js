import { EMAIL_CHANGED,
    PASSWORD_CHANGED 
} from './types';
import firebase from '@firebase/app';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChange = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password }) => {
    return (dispatch) => {
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({type: 'LOGIN_USER_SUCCESS', payload: user})
            });
    };
};
