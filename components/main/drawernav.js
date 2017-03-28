import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ToolbarAndroid,
  TouchableNativeFeedback,
  Image,

} from 'react-native';
import Toprated from '../body/toprated.js'
import {StackNavigator} from 'react-navigation';
const icon0 = require('../../assets/icon0.png');
const icon1 = require('../../assets/icon1.png');
const icon2 = require('../../assets/icon2.png');
const images = [icon0,icon1,icon2];
export default class Drawernav extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const navigator = this.props.navigation;
    this.state = {
      dataSource: ds.cloneWithRows(['Popular', 'Top-Rated' , 'Latest']),
      rowdata : []

    }
  }
  _pressdrawer(rowData,rowID,sectionID){
      if(sectionID == 0){
        this.props.navigator.navigate('Main');
      }
      else if (sectionID == 1) {
        this.props.navigator.navigate('Toprated',{name : 'Top-Rated..', navigator : this.props.navigator});
      }
      else if (sectionID == 2) {
        this.props.navigator.navigate('Latest',{name : 'Latest..'});
      }
  }
  render(){
    return(

      <View>
        <View style = {styles.toolbar}>
          <Image  style = {styles.toolbar} source = {require('../../assets/wall.png')} >
          <Text style = {styles.theader}> MovieNerd </Text>
          </Image>
        </View>
        <ListView
          style = {styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData,rowID,sectionID) => (
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('#5D707F')}
              onPress = {() => this._pressdrawer(rowData,rowID,sectionID)}
              >
              <View style = {styles.button}>
                <Image style = {{height : 30 , width : 30}} source = {images[sectionID]}  />
                <Text style = {styles.buttontext}>{rowData}</Text>
              </View>
            </TouchableNativeFeedback>
          )}
          renderSeparator = { (rowID,sectionID) => (
            <View

              style={{
                height:1,
                backgroundColor: '#ccc',

              }}
            />
          )}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  toolbar : {
    height : 170,
    width : 300,
    alignItems : 'flex-start',
    justifyContent : 'flex-end',
},
  theader : {
    fontSize : 25,
    color : 'white',
    margin : 15,
  },
  list : {
    marginTop : 15,
  },
  button : {
    flex : 1,
    padding : 15,
    alignItems : 'stretch',
    flexDirection : 'row',
  },
  buttontext : {
    fontSize : 15,
    marginLeft : 15,
    marginTop : 3,
  },
});
