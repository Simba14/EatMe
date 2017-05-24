import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text>MY ITEMS</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 15,
    // backgroundColor: '#DEDEDE',
    borderBottom: 1,
    borderBottomWidth: 0.5

  }
}

export default Header;