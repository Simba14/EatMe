import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={ styles.textInput }
      placeholder={placeholder}
    />
  )
};

const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 5,
    padding: 5,
    paddingLeft: 10,
    height: 40,
    fontSize: 16
  },
  labelStyle
});

export { Input };
