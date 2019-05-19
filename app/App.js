import React from 'react';
import SignInScreen from './Components/SignInScreen';
import InboxScreen from './Components/InboxScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  SignInScreen: {screen: SignInScreen},
  InboxScreen: {screen: InboxScreen},
});

const NavigatorHandler = createAppContainer(MainNavigator);

export default class App extends React.Component {
  componentDidMount() {
    /* eslint no-console: 0 */
    console.log('App Started');
  }

  render() {
    return (  
      <NavigatorHandler></NavigatorHandler>
    );
  }
}
