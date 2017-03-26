import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,


} from 'react-native';

export default class Toolbar extends Component {

  render(){
    return (
        <ToolbarAndroid
          title="Popular.."
          titleColor = "white"
          style ={styles.toolbar}
          elevation = {5}
        />
    );
  }

}
const styles = StyleSheet.create({
    toolbar : {
      height : 56,
      backgroundColor : '#6D8A96',
    },
});
