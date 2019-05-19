import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class CustomTextInput extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TextInput
                style={styles.textInput}
                placeholder={this.props.placeholder}
                placeholderTextColor="#80DED9"
                secureTextEntry={this.props.secureTextEntry}
                onFocus={() => this.props.stateCallback(true)}
                onEndEditing={(event) => {
                    this.props.stateCallback(false);
                    this.props.textInputCallback(event.nativeEvent.text)}
                }
            />
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