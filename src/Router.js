import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/Employee';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key= "root"hideNavBar>
                <Scene key= "auth">
                    <Scene 
                        key="login" 
                        component={LoginForm} 
                        title="Please Login"
                        stitleStyle={styles.navigationBarTitleStyle}
                    /> 
                </Scene> 
                <Scene key= "main" initial >
                    <Scene 
                        
                        rightTitle = "Add new employee"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees"
                        stitleStyle={styles.navigationBarTitleStyle}
                    />
                    <Scene
                        key="employeeCreate" 
                        component={EmployeeCreate} 
                        title="Create an employee"
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