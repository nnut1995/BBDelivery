import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../components/login/login'
import Home from '../components/home/tabRender'

export const Tabs = StackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    path: 'Home',
    screen: Home
  }
})
