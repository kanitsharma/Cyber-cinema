import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableNativeFeedback,
  Image,
  ActivityIndicator,

} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class Body extends Component {
  constructor(props){
    super(props);
      this.state = {
      movielist : [],
      apidata : {},
      animating : true ,
      height : 50,
    }
  }


  _pressRow(rowData , rowID,sectionID){
      this.props.navigator.navigate('Movie' , { name : this.state.movielist[sectionID] , data :  this.state.apidata , id : sectionID });
  }


  componentWillMount(){
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
      }).then( () => {
        setTimeout( () => this.setState({ animating : false , height : 0 }) ,1000)
      } )
    .catch((error) => {
       console.error(error);
     });
  }



  render(){

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
    });
    const imgbaseurl = 'http://image.tmdb.org/t/p/w185';

    return (

      <View style = {styles.bodyview} >
      <ActivityIndicator
        animating = {this.state.animating}
        color = '#E91E63'
        size= 'large'
        hidesWhenStopped = {true}
        style = {{ height : this.state.height , backgroundColor : 'white' }}
      />
        <ListView
          style = {styles.listview}
          dataSource={ds.cloneWithRows(this.state.movielist)}
          renderRow={(rowData,rowID,sectionID,highlightRow) => (
            <View style = {styles.card}>
              <TouchableNativeFeedback
                onPress={() => this._pressRow(rowData,rowID,sectionID)}
                background={TouchableNativeFeedback.Ripple('#227585')}
                >
                <View style = {styles.row}
                  elevation = {15}>
                    <Image style={{width: 180, height: 250}} source = {{uri : imgbaseurl + this.state.apidata.results[sectionID].poster_path}}>
                    </Image>
                  <View style = {styles.textwrap}>
                    <Text style = {styles.rowtext} >{rowData}
                    </Text>
                    <View>
                      <Text style = {styles.rowtext2}
                        ellipsizeMode = 'tail'
                        numberOfLines = {5}>
                        { this.state.apidata.results[sectionID].overview}
                      </Text>
                    </View>
                    <View style = {styles.view3}><Text style = {styles.rowtext3} > VIEW NOW
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
    padding :8,
    paddingTop : 10,
  },

  bodyview : {
    backgroundColor : '#FFFFFF',
  },

  row : {
    backgroundColor : '#2D566B',
    flexDirection : 'row',
    borderRadius : 5,
  },
  rowtext : {
    padding :3,
    fontSize : 17,
    color : '#FFFFFF',

  },
  textwrap : {
    flex : 1,
    flexDirection : 'column',
    padding : 15,
  },
  rowtext2 : {
    fontSize : 12,
    padding : 3,
    color : '#FFFFFF',
    lineHeight : 24,
  },

  rowtext3 : {
    paddingTop : 15,
    color : '#FFFFFF',
  },

  view3 : {
    alignItems : 'flex-start',
    justifyContent : 'flex-end'
  }

});
