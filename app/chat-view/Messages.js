import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';


export default class Messages extends Component {
  componentDidUpdate() {
    // Somehow it does not work without this
    setTimeout(() => {
      this.onLayout();
    }, 0);
  }

  onLayout = () => {
    this.messagesWrap.scrollToEnd();
  };

  render() {
    const {children} = this.props;
    return (
      <ScrollView
        onLayout={this.onLayout}
        contentContainerStyle={styles.messages}
        ref={(c) => { this.messagesWrap = c; }}
      >
        {children}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  messages: {
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
});
