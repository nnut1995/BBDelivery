import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';



export default class Profile extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate('CurrentOrder')}>
                    <View style={styles.button}>
                        <Text>Tracking Order</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('OrderHistory')}>
                    <View style={styles.button}>
                        <Text>Order History</Text>
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
