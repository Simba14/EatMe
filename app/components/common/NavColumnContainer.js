import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class NavColumnContainer extends Component {
  render() {
    return (
      <View style={[styles.navColumnContainer, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navColumnContainer: {
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    backgroundColor: 'blue',
  }
});

export { NavColumnContainer };
