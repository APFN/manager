import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/Employee';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key= "root">
                <Scene 
                    key="login" 
                    component={LoginForm} 
                    title="Please Login"
                /> 
                <Scene 
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employees"
                    initial
                />                
            </Scene>
        </Router>

    );
};

export default RouterComponent;
//oioi?çdnfuoçewhbfuo