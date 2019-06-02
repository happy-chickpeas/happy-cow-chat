import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogButton,
  DialogFooter,
} from 'react-native-popup-dialog';
import CustomTextInput from './CustomTextInput';
import logo from '../imgs/happycow-logo.png';
import {users} from '../users.json';

export default class SignInScreen extends React.Component {
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
  };

  state = {
    isUsernameTyping: false,
    attemptedUsername: '',
    attemptedPassword: '',
    dialogVisible: false,
  };

  stateCallback = (customTextInputState) => {
    this.setState({isUsernameTyping: customTextInputState});
  };

  usernameEditingCallback = (username) => {
    this.setState({attemptedUsername: username});
  };

  passwordEditingCallback = (password) => {
    this.setState({attemptedPassword: password});
  };

  checkLogin = () => {
    const {attemptedUsername, attemptedPassword} = this.state;
    const isValidUser = ({username, emailAddress, password}) =>
      (attemptedUsername === username || attemptedUsername === emailAddress) &&
      attemptedPassword === password;
    return users.find(isValidUser);
  };

  render() {
    const {navigation: {navigate}} = this.props;
    const {dialogVisible, isUsernameTyping} = this.state;
    const style = isUsernameTyping ? styles.inputContainerFocused : styles.inputContainer;

    return (
      <View style={style}>
        <Image
          source={logo}
          style={styles.logo}
        />
        <CustomTextInput
          placeholder="Username or email"
          stateCallback={this.stateCallback}
          textInputCallback={this.usernameEditingCallback}
        />
        <CustomTextInput
          placeholder="Password"
          secureTextEntry
          stateCallback={this.stateCallback}
          textInputCallback={this.passwordEditingCallback}
        />
        <TouchableOpacity onPress={() => {
          if (this.checkLogin()) {
            navigate('InboxScreen');
          } else {
            this.setState({dialogVisible: true});
          }
        }}
        >
          <Text style={styles.button}>Login</Text>
          <Dialog
            visible={dialogVisible}
            onTouchOutside={() => {
              this.setState({dialogVisible: false});
            }}
            dialogTitle={<DialogTitle title="Login failed" />}
            footer={(
              <DialogFooter>
                {[<DialogButton key="1" text="OK" onPress={() => this.setState({dialogVisible: false})} />]}
              </DialogFooter>
)}
          >
            <DialogContent>
              <Text>Invalid username or password</Text>
            </DialogContent>
          </Dialog>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer:
  {
    backgroundColor: '#80DED9',
    paddingRight: 40,
    paddingLeft: 40,
    flex: 1,
    alignContent: 'center',
  },
  inputContainerFocused:
  {
    backgroundColor: '#80DED9',
    paddingRight: 40,
    paddingLeft: 40,
    flex: 1,
    alignContent: 'center',
  },
  logo:
  {
    height: 200,
    width: 250,
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
    textAlign: 'center',
    borderRadius: 20,
  },
});
