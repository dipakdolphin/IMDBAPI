import React, {Component} from 'react';
import {view,Stylesheet,props,Image,Text} from 'react-native';


export default class details extends Component{
   constructor (props){
       super(props)
   }
   render(){
       const {prams} = this.props.navigation.state;
       return(
           <View>
               <Text>Hello</Text>
           </View>

       );

   }

    };
