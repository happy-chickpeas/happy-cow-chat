import React, {Component} from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {LinearGradient} from 'expo';
import {Header} from 'react-navigation-stack';
import Messages from './Messages';

const ChatTextInput = props => (
  <TextInput
    {...props}
    style={styles.textInput}
    editable
    placeholder="Type your message here!"
  />
);

export default class Chat extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Jane Doe',
    headerStyle: {
      backgroundColor: '#C9B7E6',
      borderColor: '#C9B7E6',
      shadowColor: 'transparent',
    },
    headerLeft: (
      <Button
        onPress={() => { navigation.goBack(); }}
        title=" < "
        color="#7C4EC4"
      />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      messageToSend: '',
      messages: [],
      count: 0,
    };
  }

  render() {
    const KEYBOARD_VERTICAL_OFFSET = (Header.HEIGHT || 0) + (StatusBar.currentHeight || 0);
    const {messageToSend, messages, count} = this.state;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={styles.conversationContainer}
        keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
      >
        <View style={styles.textContainer}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
            style={styles.textContainer}
          >
            <LinearGradient
              colors={['#fff', '#80DED9', '#80DED9']}
              style={styles.linearGradient}
            >
              <Messages>
                {messages.map(
                  message => (
                    <Text key={message.id} style={styles.messageSent}>
                      {message.text}
                    </Text>
                  )
                )}
              </Messages>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.inputField}>
          <ChatTextInput
            multiline
            onChangeText={(text) => {
              this.setState(prevState => ({messageToSend: text, messages: prevState.messages}));
            }}
            value={messageToSend}
          />
          <Button
            color="#7C4EC4"
            title="Send"
            accessibilityLabel="Send message"
            onPress={() => {
              if (messageToSend.length === 0) {
                return;
              }
              const message = {
                id: count,
                text: messageToSend,
              };
              this.setState(prevState => ({
                messageToSend: '',
                messages: [...prevState.messages, message],
                count: count + 1,
              }));
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  conversationContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  linearGradient: {
    flex: 1,
    padding: 20,
  },
  messageSent: {
    textAlign: 'right',
    fontSize: 18,
  },
  textContainer: {
    flex: 6,
  },
  textInput: {
    flex: 1,
  },
  inputField: {
    flex: 1,
    backgroundColor: '#C9B7E6',
    flexDirection: 'row',
  },
});
