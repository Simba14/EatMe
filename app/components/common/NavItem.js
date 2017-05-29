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
    flex: 1,
    borderColor: '#DADADA',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 20,
    flexDirection: 'row'
  },
  contentStyle: {
    fontSize: 16,
    paddingLeft: 5
  }


})

export { NavItem };
