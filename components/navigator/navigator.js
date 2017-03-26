import React, { Component } from 'react';
import {
  StyleSheet,
  ToolbarAndroid,
  Navigator,

} from 'react-native';

export default class Navigatord extends Component {

  constructor(){
    super();
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route){

  }
  render(){
    return (
        <Navigator
          initialRoute = {{name : body}}
          renderScene = {this.renderScene}
         />
    );
  }

}
const styles = StyleSheet.create({

});
