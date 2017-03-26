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

export default class ain extends Component {
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

        <StatusBar
          barStyle="light-content"
        />

        <Toolbar />
        <Body />

      </DrawerLayoutAndroid>
    );
  }

}
