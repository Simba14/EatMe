import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SubmitButton = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient colors={['#05A069', '#05C986']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent'
  }
});

export { SubmitButton };
