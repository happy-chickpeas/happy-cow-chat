import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Dialog, { DialogContent, DialogTitle, DialogButton, DialogFooter } from 'react-native-popup-dialog';
import CustomTextInput from './CustomTextInput'

export default class SignInScreen extends React.Component {
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

  componentDidMount() {
    this.setState({users: require('../users.json')});
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
       <View style={style}>
        <Image  source={require('../imgs/happycow-logo.png')}
          style={styles.logo}/>
        <CustomTextInput
          placeholder="Username or email"
          stateCallback={this.stateCallback}
          textInputCallback={this.usernameEditingCallback}
        />
        <CustomTextInput
          placeholder="Password"
          secureTextEntry={true}
          stateCallback={this.stateCallback}
          textInputCallback={this.passwordEditingCallback}
        />
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
          footer={
            <DialogFooter>
              {[<DialogButton key="1" text="OK" onPress={() => this.setState({ dialogVisible: false })}/>]}
            </DialogFooter>
          }
        >
          <DialogContent>
            <Text>Invalid username or password</Text>
          </DialogContent>
        </Dialog>
        </TouchableOpacity>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  inputContainer:
  {
    backgroundColor: '#80DED9',
    paddingRight: 40,
    paddingLeft: 40,
    flex: 1,
    alignContent: 'center'
  },
  inputContainerFocused:
  {
    backgroundColor: '#80DED9',
    paddingRight: 40,
    paddingLeft: 40,
    flex: 1,
    alignContent: 'center'
  },
  logo:
  {
    height: 200,
    width: 250
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
