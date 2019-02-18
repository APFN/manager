import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
    
};

const styles = {
    viewStyle:{
        backgroundColor: '#021b61',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddindTop: 15,
        elevation: 10,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#FFFFFF'
    }
};


export { Header };