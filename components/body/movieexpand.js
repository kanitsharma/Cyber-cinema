import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Moviescreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.name}`,
    header: {
        style: { backgroundColor: '#E91E63' },
        titleStyle : {color : 'white'},
        tintColor : 'white',
    }
  };
  render() {
    const imgbaseurl = 'http://image.tmdb.org/t/p/w500';
    const { params } = this.props.navigation.state;
    return (
      <View style = {styles.body} >
        <Image style={{width: 400, height: 250}} source = {{uri : imgbaseurl + params.data.results[params.id].backdrop_path}} />
        <ScrollView>
          <View style = {styles.textwrap}>
            <Text style = {styles.header} > {params.name} </Text>
            <Text style = {styles.rdate}>Release Date : {params.data.results[params.id].release_date}</Text>
            <Text style = {styles.info}>
              {params.data.results[params.id].overview}
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
