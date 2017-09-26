import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Student ID"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          SecureTextEntitry
          returnKeyType="go"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: '#E9E9E9',
    marginBottom: 20,
    color: 'black',
    paddingHorizontal: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: "700"
  },
  buttonContainer: {
    paddingVertical: 15,
    backgroundColor: "#0F6BFF"
  }
});
