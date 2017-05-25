import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const SubmitButton = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#14C68A',
    marginLeft: 20,
    marginRight: 20
    //drop shadow

  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#FFF'
  }
});

export { SubmitButton };
