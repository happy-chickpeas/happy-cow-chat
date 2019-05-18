import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import CustomTextInput from './CustomTextInput'

export default class SignInScreen extends React.Component {
    state = {
        isUsernameTyping: false,
        attemptedUsername: "",
        attemptedPassword: ""
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#80DED9',
            borderColor: '#80DED9',
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
            borderBottomWidth: 0,
        },
    }
    
    stateCallback = (customTextInputState) => {
        this.setState({isUsernameTyping: customTextInputState})
    }

    usernameEditingCallback = (username) => {
        this.setState({attemptedUsername: username})
    }

    passwordEditingCallback = (password) => {
        this.setState({attemptedPassword: password})
    }
    
    checkLogin = () => {
        if (this.state.attemptedUsername == "Mazsi" && this.state.attemptedPassword == "kiscica") {
            return true;
        }
        return false;
    }

    render() {
        const style = this.state.isUsernameTyping ? styles.inputContainerFocused : styles.inputContainer;

        const {navigate} = this.props.navigation;
        return (
            <View>
                <View style={style}>
                    <SvgUri style={styles.logo}
                        width="200"
                        height="200"
                        source={require('../imgs/happycow-logo.svg')}
                    />                    
                    <CustomTextInput
                        placeholder="Username or email"
                        stateCallback={this.stateCallback.bind(this)}
                        textInputCallback={this.usernameEditingCallback.bind(this)}
                    ></CustomTextInput>
                    <CustomTextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        stateCallback={this.stateCallback.bind(this)}
                        textInputCallback={this.passwordEditingCallback.bind(this)}
                    ></CustomTextInput>
                    <TouchableOpacity onPress={() => {if (this.checkLogin()){navigate('InboxScreen')}}}>
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
        paddingBottom: 200
    },
    inputContainerFocused:
    {
        backgroundColor: '#80DED9',
        paddingRight: 40,
        paddingLeft: 40,
        paddingBottom: 200
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
