import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component{

    componentWillMount(){
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }
    
    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }){
        const ds = new FlatList.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <ListItem employee={employee} />
    }
    

    render(){
        console.log(this.props);
        return(
            <FlatList 
            data={this.props.employees}
            renderItem={({ item }) => 
                <CardSection>
                    <Text style={styles.titleStyle}>
                        {item.name}
                    </Text>
                </CardSection>
                }
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid};
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch }) (EmployeeList);