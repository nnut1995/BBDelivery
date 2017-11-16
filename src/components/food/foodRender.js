import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Food from './allFood'
import * as constants from '../../globalVar';
import Axios from 'axios';


async function getallFood() {
    try {
        var response = await Axios.get(constants.HTTP_URL +'/getfood')
        return response
    } catch (error) {
        console.error(error);
    }
}

export default function foodRender({handleChildClick}) {
    return (
        <View style={styles.container}>
            <Food handleChildClick={handleChildClick} getItem={getallFood}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
