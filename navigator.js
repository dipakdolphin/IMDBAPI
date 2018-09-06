import React, {Component} from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import App from './App'
import Details from './Details'



export default class navigator extends React.Component{
  
   render(){
       return(
          <AppStackNavigator />
       );

   }

}

    const AppStackNavigator = createStackNavigator({
        Home:App,
        Details:Details

    });
    