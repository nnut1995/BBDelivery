import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from '../components/home/home'
import Food from '../components/home/food'
import Checkout from '../components/home/checkout'
import Profile from '../components/home/profile'


export const Tabs = TabNavigator({
  Home: {
    screen: Home
  },
  Food: {
    screen: Food
  },
  Checkout: {
    screen: Checkout
  },
  Profile: {
    screen: Profile
  }
});
