import React, {Component} from 'react';
import {View} from 'react-native';
import CheckoutTable from './CheckoutTable';

// [item, item, item]

export default function Cart(props) {
    return (
        <View style={{flex: 1}}>
            <CheckoutTable data={props.data}/>
        </View>
    )
}