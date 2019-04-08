/*

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/


import React, { Component } from 'react';
 
import { Platform, StyleSheet, View, Text, Image } from 'react-native';
 
export default class Myapp extends Component
{
 
  constructor(){
 
    super();
 
    this.state={
 
      isVisible : true,
 
    }
 
  }
 
  Hide_Splash_Screen=()=>{
 
    this.setState({ 
      isVisible : false 
 
    });
 
  }
 
  componentDidMount(){
 
    var that = this;
 
    setTimeout(function(){
 
      that.Hide_Splash_Screen();
 
    }, 1000);
 
 
  
  }
 
    render()
    {
        let Splash_Screen = (
 
            <View style={styles.SplashScreen_RootView}>
 
                <View style={styles.SplashScreen_ChildView}>
 
 
                <Image style={{width:450, height:750}}
   source={require('/home/digvijay/Desktop/splash/512Oj7Kq0-L._SX425_.jpg')}/>
                </View>
 
 
 
            
            </View> )
 
        return(
 
            <View style = { styles.MainContainer }>
 
                <Text style={{textAlign: 'center'}}> Hello people </Text>
 
                {
                  (this.state.isVisible === true) ? Splash_Screen : null
                }
            
 
            </View>
            
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
 
    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
        
    },
 
    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        margin: 20,
    },
 
})