import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Sivirino"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="(xx)99999-9999"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>
                <CardSection>
                    <Text style={styles.pickertextStyle}>Shift</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({props: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" valuWednesdaye=""/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>                    
                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>                    
                </CardSection>
            </Card>
        );
    }
}
const styles ={
    pickertextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) =>{
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);