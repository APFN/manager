import _ from 'lodash';
import React, { Component } from 'react';
import {View, Text, Picker } from 'react-native';
import {CardSection, Card, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave} from '../actions';
import EmployeeForm from  './EmployeeForm';

class EmployeeEdit extends Component{


  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate({ prop, value});
    });
  }
  onButtonPress(){
    const { name, phone, shift } = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.  props.employee.uid})
  }

    render(){
        return(
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={ this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}



const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
  
    return { name, phone, shift };
  }
  
  export default connect( mapStateToProps, { 
      employeeUpdate,
      employeeSave
    })(EmployeeEdit);