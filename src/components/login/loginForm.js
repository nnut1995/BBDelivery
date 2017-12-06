import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, AsyncStorage, Alert} from 'react-native';
import {NavigationActions} from 'react-navigation'
import Axios from 'axios';
import * as constants from '../../globalVar';
// import bcrypt from "react-native-bcrypt";



const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'TabRender'})
    ]
})

async function Login(username, password, navigation) {
    try {
        let responseJson = await Axios.post(constants.HTTP_URL + '/login', {
            'Username': username,
            'Password': password,
        })
        console.log(responseJson.data)
        if (responseJson.data.Type == 'student'){
            navigation.dispatch(resetAction)
            await AsyncStorage.setItem('myState', username);
        }
        else{
            Alert.alert("Wrong Password")
        }
    } catch (error) {
        console.error(error);
    }
}

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Student ID"
                    keyboardType="numeric"
                    onChangeText={(username) => this.setState({username})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    returnKeyType="go"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(password) => this.setState({password})}
                />
                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => Login(this.state.username, this.state.password, this.props.navigation)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
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
        backgroundColor: "#2E3B60"
    }
});
