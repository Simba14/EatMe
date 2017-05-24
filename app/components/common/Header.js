import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 15,
    borderBottom: 1,
    borderBottomWidth: 0.5
  }
}

export { Header };
