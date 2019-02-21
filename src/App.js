import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import '@firebase/auth';
import LoginForm from './components/LoginForm';
import Router  from './Router';

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
        const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router/>
            </Provider>            
        );
    }

}

export default App;