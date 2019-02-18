import React from 'react';
import { View } from 'react-native';

const CardSection = (props) =>{
    return(
        <View style={style.containerStyle}>
            {props.children}
        </View>
    );
};

const style  = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        //elevation: 0,
        position: 'relative',  
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        marginTop: 1,
        marginBottom: 1,
    }
};

export { CardSection };