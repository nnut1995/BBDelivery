import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

async function getOrder() {
    try {
        const myState = await AsyncStorage.getItem('myState');
        let responseJson = await Axios.post(constants.HTTP_URL + '/getOrder', {
            'state': state,
        })
        console.log(responseJson)
    } catch (error) {
        console.error(error);
    }
}


export default class CurrentOrder extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate('Main')}>
                    <View style={styles.button}>
                        <Text>Back</Text>
                    </View>
                </TouchableOpacity>
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