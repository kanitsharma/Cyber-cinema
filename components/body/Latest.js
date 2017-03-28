import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';

import Toolbar from '../main/toolbar.js'
import Drawernav from '../main/drawernav.js'

export default class Lastest extends Component {


  constructor(props){
    super(props);
    this.state = {
      title : 'Latest..',
      apidata : {},
      animating : true ,
      height : 50,
    }
  }

  componentWillMount(){
    this.getdata();
  }

  getdata(){
    fetch(
      'https://api.themoviedb.org/3/movie/latest?api_key=830ab4aeaedf01193752b0fdfab97d5e&language=en-US'
    )
    .then((response) => response.json())
      .then((responseJson) => {
        this.setState( { apidata : responseJson } );
        console.log(this.state.apidata.original_title);
      }).then( () => {
        setTimeout( () => this.setState({ animating : false , height : 0 }) ,1000)
      } )
    .catch((error) => {
       console.error(error);
     });
  }

  static navigationOptions = {
    title: ({ state }) => `${state.params.name}`,
    header: {
        style: { backgroundColor: '#E91E63' },
        titleStyle : {color : 'white'},
        tintColor : 'white',
    }
  };


  render(){
    const imgbaseurl = 'http://image.tmdb.org/t/p/w500';
    return (
      <View style = {styles.body}>
        <ActivityIndicator
          animating = {this.state.animating}
          color = '#E91E63'
          size= 'large'
          hidesWhenStopped = {true}
          style = {{ height : this.state.height , backgroundColor : 'white' }}
        />
        <Image style={{width: 400, height: 250}} source = {{uri : imgbaseurl + this.state.apidata.backdrop_path}} />
        <ScrollView>
          <View style = {styles.textwrap}>
            <Text style = {styles.header} > {this.state.apidata.original_title} </Text>
            <Text style = {styles.rdate}>Release Date : {this.state.apidata.release_date}</Text>
            <Text style = {styles.info}>
              {this.state.apidata.overview}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }

}
const styles = StyleSheet.create({

  body : {
    flexDirection : 'column',
    flex : 1,
    backgroundColor : '#F9F9F9',

  },

  textwrap : {
    flex : 1 ,
    padding : 10,
  },

  header : {
    color : '#393939',
    fontSize : 30,
    alignItems : 'stretch',
  },

  rdate : {
    margin : 7,
    fontSize : 16,
  },

  info : {
    color : '#838383',
    fontSize : 15,
    lineHeight : 20,
    margin : 7,
  },


});
