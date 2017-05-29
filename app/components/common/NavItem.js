import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavItem = () => {
  return (
    <View style={styles.viewStyle}>
      <Text>NAV ITEM</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    // height: 60,
    // backgroundColor: 'red'
  }

})

export { NavItem };
