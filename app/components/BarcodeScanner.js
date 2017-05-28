import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native';
import Camera from 'react-native-camera';
import axios from 'axios';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class BarcodeScanner extends Component {
  constructor() {
    super();
    this.state = {
      showCamera: true,
      scannedItem: ""
    }
  }

  render() {
      if (this.state.showCamera) {
        return (
          <View style={styles.container}>
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}
              onBarCodeRead={(data) => this.requestItemInformation(data)}
            >
              <View style={styles.overlay}></View>
            </Camera>
          </View>
        );
      } else {
        return (
          <View>
            {this.checkResponse(this.state.scannedItem)}
          </View>
        );
      }
  }

  checkResponse(scannedItem) {
    if(scannedItem !== ""){
      Actions.add({scannedItem: scannedItem})
    }
  }

  requestItemInformation(data) {
    this.setState({showCamera: false});
    var barcodeNumber = data.data;
    axios.get('https://api.upcdatabase.org/json/128009a43963c119609bd223c9f249cf/' + barcodeNumber)
      .then(response => this.setState({ scannedItem: response.data.description }));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    marginBottom: 300,
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 200,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'dashed'
  }
});

export default BarcodeScanner;
