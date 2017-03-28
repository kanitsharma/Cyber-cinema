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
          title={this.props.title}
          titleColor = "white"
          style ={styles.toolbar}
          elevation = {5}
          navIcon ={require('../../assets/nav.png')}
          onIconClicked = {this.props.e}
        />
    );
  }

}
const styles = StyleSheet.create({
    toolbar : {
      height : 56,
      backgroundColor : '#E91E63',
    },
});
