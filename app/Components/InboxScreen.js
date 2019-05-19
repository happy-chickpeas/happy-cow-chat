import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class InboxScreen extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


