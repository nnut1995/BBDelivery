import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import CurrentOrder from './currentOrder'
import OrderHistory from './orderHistory'
import Profile from './profile'

const Stacks = StackNavigator({
        Main: {screen: Profile},
        CurrentOrder: {screen: CurrentOrder},
        OrderHistory: {screen: OrderHistory},
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });


export default class ProfilePage extends Component {
    render() {
        return (
            <Stacks/>
        );
    }
}