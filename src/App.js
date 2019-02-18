import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import '@firebase/auth';
import LoginForm from './components/LoginForm'

class App  extends Component {

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyA-8oaYYiVDBBNPjen7zo0HnRodNWcp1MA",
            authDomain: "manager-ac4e5.firebaseapp.com",
            databaseURL: "https://manager-ac4e5.firebaseio.com",
            projectId: "manager-ac4e5",
            storageBucket: "manager-ac4e5.appspot.com",
            messagingSenderId: "146305969842"
        };
        firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm>                    
                </LoginForm>
            </Provider>            
        );
    }

}

export default App;