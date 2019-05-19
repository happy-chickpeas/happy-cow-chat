import React, { Component } from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback,View, Platform, StatusBar, StyleSheet, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import { Header } from 'react-navigation-stack';



class ChatTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
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
      placeholder: 'Type your message here!',
    };
  }

  render() {
    const KEYBOARD_VERTICAL_OFFSET = (Header.HEIGHT || 0) + (StatusBar.currentHeight || 0);

    return (
      <KeyboardAvoidingView 
        behavior='padding' 
        enabled 
        style={styles.conversationContainer}
        keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}>
        <View style={styles.headerContainer}>
          <Text>One</Text>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.textContainer}>
          <LinearGradient
            colors={['#fff', '#80DED9', '#80DED9']}
            style={{ flex: 1 }}>
            <Text>Two</Text>
          </LinearGradient>
        </View>
        </TouchableWithoutFeedback>
        <View style={styles.inputField}>
          <ChatTextInput
            multiline={true}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
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
  }
});
