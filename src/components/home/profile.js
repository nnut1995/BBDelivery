import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Tabs from '../../config/tabRouter'

export default class Profile extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Hi</Text>
      </View>
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
