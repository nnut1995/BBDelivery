import React, {Component} from 'react';
import {View} from 'react-native';
import CheckoutTable from './CheckoutTable';

// [item, item, item]

export default function Cart() {
    return (
        <View style={{flex: 1}}>
            <CheckoutTable/>
        </View>
    )
}