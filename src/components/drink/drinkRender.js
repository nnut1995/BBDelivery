import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Drink from '../food/allFood'
import * as constants from '../../globalVar';
import Axios from 'axios';


async function getallDrink() {
    try {
        var response = await Axios.get(constants.HTTP_URL + '/getdrink')
        return response
    } catch (error) {
        console.error(error);
    }
}

export default function drinkRender({handleChildClick}) {
    return (
        <View style={styles.container}>
          <Drink handleChildClick={handleChildClick} getItem={getallDrink}/>
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
