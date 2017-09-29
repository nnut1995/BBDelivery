import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Tabs from '../../config/tabRouter'

export default class tabRender extends Component {
  render() {
    return (
      <Tabs navigation={this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
