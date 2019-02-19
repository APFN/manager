import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { emailChanged,
    passwordChange 
} from '../actions';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChange(text);
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label = "Email"
                        placeholder= "email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />                    
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label = "Password"
                        placeholder= "password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />  
                    
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

const maptStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect( maptStateToProps , {emailChanged, passwordChange}) (LoginForm);