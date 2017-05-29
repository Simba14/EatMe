import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';


const NavItem = ({onPress, children}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.contentStyle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    borderColor: '#DADADA',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 20
  },
  contentStyle: {
    fontSize: 16
  }

})

export { NavItem };
