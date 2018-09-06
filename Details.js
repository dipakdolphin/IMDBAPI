import React, {Component} from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';


class Details extends React.Component{
   render(){
       return(
           <View style={styles.container}>
               <Text>Hello</Text>
           </View>

       );
    } 

   }
    export default Details;
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
        
      });