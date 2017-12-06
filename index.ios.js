import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import {Tabs} from './src/config/router';

console.disableYellowBox = true;

export default class BBDeliver extends Component {
  render() {
    return (
      <Tabs />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


AppRegistry.registerComponent('BBDeliver', () => BBDeliver);
