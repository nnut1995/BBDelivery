import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../components/login/login'
import TabRender from '../components/home/tabRender'

export const Tabs = StackNavigator({
  Login: {
    screen: Login
  },
  TabRender: {
    path: 'TabRender',
    screen: TabRender,
  }
    })
