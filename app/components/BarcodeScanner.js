import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Alert, Image } from 'react-native';
import Camera from 'react-native-camera';
import axios from 'axios';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <View style={styles.cameraContainer}>
              <Camera
                ref={(cam) => {
                  this.camera = cam;
                }}
                style={styles.cameraPreview}
                aspect={Camera.constants.Aspect.fill}
                onBarCodeRead={(data) => this.requestItemInformation(data)}
              >
                <Image style={styles.overlayStyle} source={require('../assets/overlayBarcode.png')} />
              </Camera>
            </View>
            <View style={styles.tutorialImageContainer}>
              <Image style={styles.tutorialImage} source={require('../assets/mobile_iphone_scan.png')} />
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.loadingContainer}>
            <Text style={styles.loading}>
              <Icon name="trash" size={23} color="#900" />
            </Text>
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
    alignItems: 'stretch'
  },
  cameraContainer: {
    flex: 1
  },
  tutorialImageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  tutorialImage: {
    flex: 1,
    width: 200,
    height: 200,
    opacity: 0.6,
    marginTop: 40
  },
  cameraPreview: {
    flex: 1
  },
  overlayStyle: {
    alignSelf: 'center',
    marginTop: 65
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center'
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BarcodeScanner;
