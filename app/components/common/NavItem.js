import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const NavItem = ({onPress, children, imagePath}) => {
  return (
    <View style={styles.viewStyle}>
      <Image
        source={ imagePath }
      />
      <Text style={styles.contentStyle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    // flex: 1 - causes button width to go offscreen
    flexDirection: 'row',
    borderColor: '#DADADA',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 20,
  },
  contentStyle: {
    fontSize: 16,
    paddingLeft: 5
  }
})

export { NavItem };
