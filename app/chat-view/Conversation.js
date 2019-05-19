import React, { Component } from 'react';
import { Button, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, ScrollView, StatusBar, StyleSheet, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import { Header } from 'react-navigation-stack';

class Messages extends React.Component {
  onLayout() {
    this.messagesWrap.scrollToEnd();
  }

  componentDidUpdate() {
    // Somehow it does not work without this
    setTimeout(() => {
      this.onLayout();
    }, 0);
  }

  render() {
    return (
      <ScrollView
        onLayout={this.onLayout.bind(this)}
        contentContainerStyle={styles.messages}
        style={styles.messagesWrap}
        ref={(c) => {this.messagesWrap = c}}>
          {this.props.children}
      </ScrollView>
    );
  }
}

class ChatTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        style={styles.textInput}
        editable={true}
        placeholder="Type your message here!"
      />
    );
  }
}

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageToSend: '',
      messages: []
    };
  }

  static navigationOptions = {
    title: 'Chat',
  };

  render() {
    const KEYBOARD_VERTICAL_OFFSET = (Header.HEIGHT || 0) + (StatusBar.currentHeight || 0);

    return (
      <KeyboardAvoidingView
        behavior='padding'
        enabled
        style={styles.conversationContainer}
        keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Jane Doe</Text>
        </View>
        <View style={styles.textContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={styles.textContainer}>
              <LinearGradient
                colors={['#fff', '#80DED9', '#80DED9']}
                style={styles.linearGradient}>
                <Messages>
                  {this.state.messages.map((message, i) => <Text key={i}>{message}</Text>)}
                </Messages>
              </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.inputField}>
          <ChatTextInput
            multiline={true}
            onChangeText={(text) => {
              this.setState((prevState) => {
                return { messageToSend: text, messages: prevState.messages }
              })
            }}
            value={this.state.messageToSend}
          />
          <Button
          color='#7C4EC4'
          title='Send'
          accessibilityLabel='Send message'
          onPress={() => {
            if (this.state.messageToSend.length === 0) {
              return;
            }
            this.setState((prevState) => {
              return { messageToSend: '', messages: [...prevState.messages, prevState.messageToSend] }
            })
          }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  conversationContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#C9B7E6',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  linearGradient: {
    flex: 1
  },
  messages: {
    justifyContent: 'flex-end',
    flexGrow: 1
  },
  textContainer: {
    flex: 6,
  },
  textInput: {
    flex: 1
  },
  inputField: {
    flex: 1,
    backgroundColor: '#C9B7E6',
    flexDirection: 'row'
  }
});
