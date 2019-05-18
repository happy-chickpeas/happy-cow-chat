import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    /* eslint no-console: 0 */
    console.log('App Started');
  }

  render() {
    return (
      <View style={styles.container}>
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
