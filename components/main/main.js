import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  StatusBar,
  } from 'react-native';
import Drawernav from './drawernav.js'
import Toolbar from '../toolbar/toolbar.js'
import Body from '../body/body.js'
import Navigatord from '../navigator/navigator.js'

export default class Main extends Component {
  render(){
    return(
      <DrawerLayoutAndroid
        drawerWidth = {300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView ={ () => (
          <Drawernav />
        )}
        statusBarBackgroundColor = "#5D707F"
        >
        <Toolbar />
        <Body />

      </DrawerLayoutAndroid>
    );
  }

}
