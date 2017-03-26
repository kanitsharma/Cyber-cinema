import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Movie from './components/main/main.js'
import Movieex from './components/body/movieexpand.js'
export default class movienerd_alpha extends Component {
  render() {
    return (
        <Movie />
    );
  }
}
AppRegistry.registerComponent('movienerd_alpha', () => movienerd_alpha);
