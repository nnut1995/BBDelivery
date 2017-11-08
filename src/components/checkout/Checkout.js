import React, {Component} from 'react';
import {View} from 'react-native';
import CheckoutTable from './CheckoutTable';

export default function Checkout({data, onChangeAmount, totalForFooter}) {
    return (
        <View style={{flex: 1}}>
            <CheckoutTable data={data} onChangeAmount={onChangeAmount} totalForFooter={totalForFooter}/>
        </View>
    )
}