import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './loginForm';


export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/logo.png')}
          />
          <View style={styles.formContainer}>
            <LoginForm navigation={this.props.navigation} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  logo: {
    width: 100,
    height: 100
  }
});
