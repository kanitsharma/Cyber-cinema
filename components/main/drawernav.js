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


export default class Drawernav extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Popular', 'Upcoming' , 'Latest']),
      rowdata : []

    }
  }
  onlistclick(){

  }
  render(){
    return(

      <View>
        <View style = {styles.toolbar}>
          <Image  style = {styles.toolbar} source = {require('../../assets/wall.jpg')} >
          <Text style = {styles.theader}> MovieNerd </Text>
          </Image>
        </View>
        <ListView
          style = {styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('#5D707F')}
              >
              <View style = {styles.button}>
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

  },
  button : {
    flex : 1,
    padding : 15,
    alignItems : 'center',

  },
  buttontext : {
    fontSize : 15,

  },
});
