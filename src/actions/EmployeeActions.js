import firebase from '@firebase/app';
import { Actions } from 'react-native-router-flux';
import '@firebase/database';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => { 
    const { currentUser } = firebase.auth();

    return (dispatch) =>{
        firebase.database().ref( `/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE})
                Actions.employeeList({type: 'reset' })
            });
            
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref( `/users/${currentUser.uid}/employees`)
        .on('value', snapshot =>{
            dispatch({ type: EMPLOYEE_FETCH_SUCESS, payload: snapshot.val() });
        });
    };
};