import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomTextInput = ({
  placeholder,
  secureTextEntry,
  stateCallback,
  textInputCallback,
}) => (
  <TextInput
    style={styles.textInput}
    placeholder={placeholder}
    placeholderTextColor="#80DED9"
    secureTextEntry={secureTextEntry}
    onFocus={() => stateCallback(true)}
    onEndEditing={(event) => {
      stateCallback(false);
      textInputCallback(event.nativeEvent.text);
    }
    }
  />
);

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput:
  {
    backgroundColor: '#fff',
    borderColor: '#80DED9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    marginBottom: 15,
    borderRadius: 25,
  },
});
