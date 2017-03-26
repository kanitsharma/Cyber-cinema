import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './components/main/main.js'

export default class movienerd_alpha extends Component {
  render() {
    return (
      <Main />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('movienerd_alpha', () => movienerd_alpha);
