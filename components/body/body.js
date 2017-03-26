import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableNativeFeedback,
  Image,
  AppRegistry,
  RefreshControl,

} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Movieex from './movieexpand.js'
export default class Body extends Component {
  constructor(props){
    super(props);
      this.state = {
      movielist : [],
      apidata : {},
      refreshing : true,
    }
  }


  pressRow(rowData , rowID,sectionID){

  }


  componentWillMount(){
    this.setState({ refreshing : true });
    this.getdata();
  }


  getdata(){
    movielist = [];
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=830ab4aeaedf01193752b0fdfab97d5e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false'
    )
    .then((response) => response.json())
      .then((responseJson) => {
        this.setState( { apidata : responseJson } );
        responseJson.results.map((obj) => {
          movielist.push(obj.original_title);
        });
        this.setState( { movielist : movielist } );
        this.setState({ refreshing : false });
      })
    .catch((error) => {
       console.error(error);
     });
  }


  _onRefresh() {
   this.setState({refreshing: true});
   this.getdata();
 }
  render(){

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
    });
    const imgbaseurl = 'http://image.tmdb.org/t/p/w185';

    return (

      <View style = {styles.bodyview} >
        <ListView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          style = {styles.listview}
          dataSource={ds.cloneWithRows(this.state.movielist)}
          renderRow={(rowData,rowID,sectionID,highlightRow) => (
            <View style = {styles.card}>
              <TouchableNativeFeedback
                onPress={() => this.pressRow(rowData,rowID,sectionID)}
                background={TouchableNativeFeedback.Ripple('#5D707F')}
                >
                <View style = {styles.row}
                  elevation = {20}>
                    <Image style={{width: 180, height: 250}} source = {{uri : imgbaseurl + this.state.apidata.results[sectionID].poster_path}}>
                    </Image>
                  <View style = {styles.textwrap}>
                    <Text style = {styles.rowtext} >{rowData}
                    </Text>
                    <View style = {styles.textwrap2}>
                      <Text style = {styles.rowtext2}
                        ellipsizeMode = 'tail'
                        numberOfLines = {9}>
                        OverView : { this.state.apidata.results[sectionID].overview}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          )}
        />
      </View>
    );
  }

}
const styles = StyleSheet.create({

  card : {
    padding :20,
  },

  bodyview : {
    backgroundColor : '#ccc',
    marginBottom : 50,
  },

  row : {
    backgroundColor : '#E8E8EE',
    flexDirection : 'row',
  },
  rowtext : {
    fontSize : 15,
    color : 'black',
    margin : 10,
    borderBottomWidth : 1,
    borderBottomColor : 'black',
  },
  textwrap : {
    maxWidth : 150,
    maxHeight : 200,
    flexDirection : 'column',
  },
  textwrap2 : {
    marginLeft : 10,

  },
  headerview : {
    backgroundColor : '#6D8A96',
    alignItems : 'center',
    padding : 20,

  },

});

const SimpleApp = StackNavigator({
  Home: { screen: Body },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
