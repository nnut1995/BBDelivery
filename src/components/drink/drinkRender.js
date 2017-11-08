import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Drink from './allDrink'

export default function drinkRender({handleChildClick}) {
    return (
        <View style={styles.container}>
          <Drink handleChildClick={handleChildClick}/>
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
