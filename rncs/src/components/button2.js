import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const Button2 = (props) => {

    function getContent(){
        if(props.children){
            return props.children;
        }
        return <Text style={props.styles.label}>{props.label}</Text>
    }

    return (
        <TouchableHighlight
            onPress={props.onPress}
            style={[
                props.noDefaultStyles ? '' : styles.button,
                props.styles ? props.styles.button : '']}
        >
            { getContent() }
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        color="#841584"
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
});

export default Button2;
