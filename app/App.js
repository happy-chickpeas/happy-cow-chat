import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './Components/SignInScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignInScreen style={styles.container}></SignInScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80DED9',
    flex: 1
  },
});
