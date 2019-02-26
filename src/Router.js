import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/Employee';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key= "root"hideNavBar>
                <Scene key= "auth">
                    <Scene 
                        key="login" 
                        component={LoginForm} 
                        title="Please Login"
                        initial
                        stitleStyle={styles.navigationBarTitleStyle}
                    /> 
                </Scene> 
                <Scene key= "main">
                    <Scene 
                        rightTitle = "Add new employee"
                        onRight={() => { console.log('foi!!!')}}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees"
                        stitleStyle={styles.navigationBarTitleStyle}
                    />   
                </Scene>         
            </Scene>
        </Router>

    );
};

const styles = {
    navigationBarTitleStyle: {
        flex: 1,
        textAlign: 'center'
    }
}
export default RouterComponent;