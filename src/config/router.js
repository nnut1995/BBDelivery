import React from 'react';
import {StackNavigator} from 'react-navigation';

import Login from '../components/login/login'
import TabRender from './tabRender'
import CurrentOrder from '../components/profile/currentOrder'
import OrderHistory from '../components/profile/orderHistory'
import OrderDetail from '../components/profile/orderDetail'

export const Tabs = StackNavigator({
    Login: {
        screen: Login,
    },
    TabRender: {
        path: 'TabRender',
        screen: TabRender,
    },
    CurrentOrder: {screen: CurrentOrder},
    OrderHistory: {screen: OrderHistory},
    OrderDetail: {screen: OrderDetail}
})
