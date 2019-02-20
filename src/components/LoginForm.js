import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { connect }  from 'react-redux';
import { emailChanged,
        passwordChange,
        loginUser 
} from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChange(text);
    }
    onButtonPress(){
        const { email, password}= this.props.auth;
        this.props.loginUser({email, password});
    }
    renderError(){
        if(this.props.auth.error){
            return (
                <View style={{ backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.auth.error}
                    </Text>
                </View>
            );
        }
    }
    renderButton(){
        if(this.props.auth.loading){
            return <Spinner size= "large" />;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
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

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        alignSelf: 'center', 
        color: 'red',
        fontSize: 16,
        fontWeight: '600', 
        paddingTop: 10,
        paddingBottom: 10
    }
}

const maptStateToProps = state => {
    return{
        // email: state.email,
        // password: state.password,
        // error: state.error
        auth: state.auth
    };
};

export default connect( maptStateToProps, 
    {emailChanged, passwordChange, loginUser}
    ) (LoginForm);