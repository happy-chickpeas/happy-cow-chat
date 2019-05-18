import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet  } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import CustomTextInput from './CustomTextInput'

export default class SignInScreen extends React.Component {
    state = {
        isUsernameTyping: false
    }
    
    stateCallback = (customTextInputState) => {
        this.setState({isUsernameTyping: customTextInputState})
    }
    
    render() {
        const style = this.state.isUsernameTyping ? styles.inputContainerFocused : styles.inputContainer;

        return (
            <View>
                <View style={style}>
                    <SvgUri style={styles.logo}
                        width="200"
                        height="200"
                        source={require('../imgs/happycow-logo.svg')}
                    />
                    
                    <CustomTextInput placeholder="Username or email" stateCallback={this.stateCallback.bind(this)}></CustomTextInput>
                    <CustomTextInput placeholder="Password" secureTextEntry={true} stateCallback={this.stateCallback.bind(this)}></CustomTextInput>
                    <TouchableOpacity onPress={this.handlPress}>
                        <Text style={styles.button}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
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
    inputContainerFocused:
    {
        backgroundColor: '#80DED9',
        paddingTop: 10,
        paddingRight: 40,
        paddingLeft: 40,
        marginTop: 20
    },
    logo:
    {
        alignItems: 'center'
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
