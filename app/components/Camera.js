import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import Camera from 'react-native-camera';

class Camera extends Component {

  clickedMe() {
    alert("was touched");
  }

  render() {
    return (
      <View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight onPress={this.clickedMe.bind(this)}>
            <View style={styles.cameraButton}></View>
          </TouchableHighlight>
        </Camera>
      </View>
    );
  };

}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cameraButton: {
    height: 50,
    width: 50,
    backgroundColor: 'pink'
  }
})

export default Camera;
