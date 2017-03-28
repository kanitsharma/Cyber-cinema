import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Text
} from 'react-native';
import Drawernav from './drawernav.js'
import Toolbar from './toolbar.js'
import { StackNavigator } from 'react-navigation';
import Body from '../body/body.js'
import Moviescreen from '../body/movieexpand'
import Latest from '../body/Latest.js'
import Toprated from '../body/toprated.js'
export default class Main extends Component{

  constructor(props){
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.state = {
      title : 'Popular..'
    }
  }
  static navigationOptions = {
    header: {
        style: { height : 0, width : 0 },
    }
}

openDrawer() {
   this.drawer.openDrawer();
}

  render(){
    return(
      <DrawerLayoutAndroid
       drawerWidth = {300}
       drawerPosition={DrawerLayoutAndroid.positions.Left}
       ref={(_drawer) => this.drawer = _drawer}
       renderNavigationView ={ () => (
         <Drawernav
          navigator = {this.props.navigation}
         />
       )}
      >
        <View>
          <Toolbar title = {this.state.title} e ={this.openDrawer} />
          <StatusBar
            backgroundColor="#C2185B"
            barStyle="light-content"
          />
          <Body
            navigator = {this.props.navigation}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }

}
const movienerd_alpha = StackNavigator({
  Home: { screen: Main },
  Movie : { screen : Moviescreen },
  Latest : { screen : Latest },
  Toprated : { screen : Toprated },
}, { headerMode : 'screen' });

AppRegistry.registerComponent('movienerd_alpha', () => movienerd_alpha);
