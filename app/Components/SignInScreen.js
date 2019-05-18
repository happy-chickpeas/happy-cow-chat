import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet  } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const SignInScreen = () => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <SvgUri style={styles.logo}
                    width="200"
                    height="200"
                    source={require('../imgs/happycow-logo.svg')}
                />
                <TextInput style={styles.textInput} placeholder="Username or email" placeholderTextColor="#80DED9"></TextInput>
                <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor="#80DED9" secureTextEntry={true}></TextInput>
                <TouchableOpacity onPress={this.handlPress}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer:
    {
        backgroundColor: '#80DED9',
        paddingTop: 50,
        paddingRight: 40,
        paddingLeft: 40,
        marginTop: 20
    },
    logo:
    {
        alignItems: 'center'
    },
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
    },
    button:
    {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#7C4EC4',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
        borderRadius: 20,
    }
});

export default SignInScreen;