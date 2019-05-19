import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog';
import SvgUri from 'react-native-svg-uri';
import CustomTextInput from './CustomTextInput'

export default class SignInScreen extends React.Component {
    componentDidMount() {
        this.setState({users: require('../users.json')});
    }

    state = {
        isUsernameTyping: false,
        attemptedUsername: "",
        attemptedPassword: "",
        dialogVisible: false
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
        const find = this.state.users.users.find((elem) => {
            return (this.state.attemptedUsername == elem.username || this.state.attemptedUsername == elem.email_address)
                    && this.state.attemptedPassword == elem.password;
        });
        return find;
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
                    <TouchableOpacity onPress={() => {
                            if (this.checkLogin()) {
                                navigate('InboxScreen')
                            } else {
                                this.setState({ dialogVisible: true });
                            }
                        }}
                    >
                    <Text style={styles.button}>Login</Text>
                    <Dialog
                        visible={this.state.dialogVisible}
                        onTouchOutside={() => {
                        this.setState({ dialogVisible: false });
                        }}
                        dialogTitle={<DialogTitle title="Login failed" />}
                    >
                        <DialogContent>
                            <Text>Invalid username or password</Text>
                        </DialogContent>
                    </Dialog>
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
