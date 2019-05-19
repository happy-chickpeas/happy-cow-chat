import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Chat from './chat-view/Conversation';
import { createAppContainer, createStackNavigator } from 'react-navigation';

export class App extends React.Component {
  static navigationOptions = {
    title: 'HappyCow Inbox',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Button 
          color='#7C4EC4'
          title='Chat' 
          accessibilityLabel='Enter chat' 
          onPress={() => {
            this.props.navigation.navigate('Chat')
          }}
          />
        <Text>Mooo!</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Inbox: {
    screen: App,
  },
  Chat: {
    screen: Chat,
  },
}, {
    initialRouteName: 'Inbox',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigator);