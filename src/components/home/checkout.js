import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Tabs from '../../config/tabRouter'

export default class Checkout extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Hi</Text>
        <Button
        title="Go to Setup Tab"
        onPress={() => navigate('Setup')}
      />
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
