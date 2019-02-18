import React, { Component } from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadaius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        elevation: 0,
        //position: 'relative',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };