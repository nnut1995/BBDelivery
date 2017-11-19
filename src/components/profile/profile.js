import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, AsyncStorage, Alert} from 'react-native';


function MyButton({name,func}) {
    return (
            <TouchableOpacity onPress={func}>
                <View style={styles.button}>
                    <Text>{name}</Text>
                </View>
            </TouchableOpacity>
    )
}

async function logOut(navigate) {
    await AsyncStorage.setItem('myState', '');
    Alert.alert("Log out")
    navigate('Login')
}


export default class Profile extends Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <MyButton name={'Tracking Order'} func={() => navigation.navigate('CurrentOrder')}/>
                <MyButton name={'Order History'} func={() => navigation.navigate('OrderHistory')}/>
                <MyButton name={'Log out'} func={() => logOut(navigation.navigate)}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 15,
        marginTop: 20,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    }
});
