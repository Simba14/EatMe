import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const SubmitButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Click Me!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default SubmitButton;
