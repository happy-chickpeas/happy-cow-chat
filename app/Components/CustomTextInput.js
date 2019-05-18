import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class CustomTextInput extends React.Component
{
    constructor(props) {
        super(props);
        this.props.placeholder = props.placeholder;
        this.props.secureTextEntry = props.secureTextEntry;
    }
    render() {
        return(
            <TextInput
                style={styles.textInput}
                placeholder={this.props.placeholder}
                placeholderTextColor="#80DED9"
                secureTextEntry={this.props.secureTextEntry}>
            </TextInput>
        );
    }
};

const styles = StyleSheet.create({
    textInput:
    {
        backgroundColor: '#fff',
        borderColor: '#80DED9',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        marginBottom: 15,
        borderRadius: 25
    }
});